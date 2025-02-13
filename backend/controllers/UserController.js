import userModel from "../models/UserModel.js";

import bcryptjs from "bcryptjs";

import validator from "validator";
import { v2 as cloudinary } from "cloudinary";
import { generateTokenAndSetCookie } from "../utils/SetToken_Cookies.js";
import fs from "fs";
import { errorhandler } from "../utils/errorhandler.js";

//login functions

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email: email });

    if (!user) {
      return next(errorhandler(400, 'no User exists with email ' + email));
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return next(errorhandler(400, 'invalid credentials'));
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    next(error);
  }
};

// register user

const register = async (req, res, next) => {
  const { username, email, password, profilePicture } = req.body;

  // check all fields are got
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // check if user already exists
    const existeduser = await userModel.findOne({ email });
    if (existeduser) {
      return next(errorhandler(400, 'User already exists'))

    }
    // validate inputs

    if (!validator.isEmail(email)) {
      return next(errorhandler(400, 'Invalid email'))

    }
    if (!validator.isLength(password, { min: 9 })) {
      return next(errorhandler(400, 'invalid password'))
    }

    // hash password
    const hashedPassword = await bcryptjs.hash(password, 10);


    const user = {
      username,
      email,
      password: hashedPassword,
      profilePicture

    };
    const newUser = new userModel(user);
    await newUser.save();

    // create jwt token
    generateTokenAndSetCookie(res, newUser._id);


    res.json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    next(error);
  }
};

// log out the user function with delete cookie

const logout = (req, res, next) => {
  res.clearCookie("token");
  res.json({ message: "User logged out successfully" });
};

// check user function
export const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      generateTokenAndSetCookie(res, user._id);

      const { password, ...rest } = user._doc;
      res.status(200).json({ user: rest });
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new userModel({
        username:
          name.toLowerCase().split(' ').join('') +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      generateTokenAndSetCookie(res, newUser._id);

      const { password, ...rest } = newUser._doc;
      res.status(200).json({ user: rest });
    }
  } catch (error) {
    next(error);
  }
};
const checkUser = async (req, res, next) => {
  const { userId } = req;
  try {
    const user = await userModel.findById(userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Unauthorized++" });
    }
    res.json({ user: user._doc });
  } catch (error) {
    next(error);
  }
};
const updateUser = async (req, res, next) => {
  const { userId } = req;
  try {
    const user = await userModel.findByIdAndUpdate(
      userId,
      {
        ...req.body
      },
      { new: true }
    ).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Unauthorized++" });
    }
    res.json({ user: user._doc });
  } catch (error) {
    next(error);
  }

};
// toggle theme settings 

const toggleTheme = async (req, res, next) => {
  const { userId } = req;
  const { theme } = req.body;

  try {
    const user = await userModel.findByIdAndUpdate(
      userId,
      {
        theme: theme,
      },
      { new: true }
    ).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Unauthorized++" });
    }
    res.json({ user: user._doc });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  // get user isAdmin from user model with req.userId
  const { userId } = req;
  const user = await userModel.findById(userId);
  if (!user.isAdmin) {
    return next(errorhandler(403, 'You are not allowed to see all users'));
  }
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.sort === 'asc' ? 1 : -1;

    const users = await userModel.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const usersWithoutPassword = users.map((user) => {
      const { password, ...rest } = user._doc;
      return rest;
    });

    const totalUsers = await userModel.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthUsers = await userModel.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      users: usersWithoutPassword,
      totalUsers,
      lastMonthUsers,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {

  try {
    await userModel.findByIdAndDelete(req.params.userId);
    res.status(200).json('User has been deleted');
  } catch (error) {
    next(error);
  }
};
export const getUser = async (req, res, next) => {

  try {
    const user = await userModel.findById(req.params.userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
// admin login function 

const adminLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return next(errorhandler(400, 'Email is required'));
  }
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    try {
      const user = await userModel.findByIdAndUpdate(req.userId, {
        isAdmin: true,
      });
      generateTokenAndSetCookie(res, user._id);
      res.json({ message: "Admin logged in successfully", user });
    } catch (error) {
      next(error);

    }
  } else {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

}
export {
  login,
  register,
  adminLogin,
  logout,
  updateUser,
  checkUser,
  toggleTheme,



};
