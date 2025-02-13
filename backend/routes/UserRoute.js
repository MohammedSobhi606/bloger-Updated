import express from "express";
import upload from "../middlewares/multer.js";
import {
  adminLogin,
  checkUser,
  deleteUser,
  getUser,
  getUsers,
  google,
  login,
  logout,
  register,
  toggleTheme,
  updateUser,
} from "../controllers/UserController.js";
import isAuth from "../middlewares/auth.js";
// routes.login

const userRouter = express.Router();

userRouter.post("/register", upload.single("avatar"), register);

userRouter.post("/login", login);
userRouter.post("/adminLogin", isAuth, adminLogin);
userRouter.post('/google', google)
userRouter.post("/checkAuth", isAuth, checkUser);
userRouter.post("/updateUser", isAuth, updateUser);
userRouter.post("/toggleTheme", isAuth, toggleTheme);
userRouter.post("/logout", logout);
userRouter.get('/getusers', isAuth, getUsers);
userRouter.delete('/delete/:userId', deleteUser);
userRouter.get('/getUser/:userId', getUser);
export default userRouter;

// routes.user
