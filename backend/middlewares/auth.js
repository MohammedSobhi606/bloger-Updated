import jwt from "jsonwebtoken";
import userModel from "../models/UserModel.js";
// Middleware function to validate JWT token

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "- no token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error in authorization middleware", error);
    res.status(401).json({ message: "You are not authorized" });
  }
};

export default isAuth;
