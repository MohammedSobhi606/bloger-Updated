import express from "express";
import cors from "cors";
import "dotenv/config.js";
import { ConnectDB } from "./configs/dbConnect.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/UserRoute.js";
import ConnectCloudinary from "./configs/Cloudinary.js";
import bodyParser from "body-parser";
import PostRouter from "./routes/PostRoute.js";
import CommentRouter from "./routes/CommentRoute.js";

const app = express();
const port = process.env.PORT || 3000;

///middleware
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// db connection
ConnectDB();
// connect to cloudinary server
ConnectCloudinary();
// api endpoints
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/user", userRouter);
app.use("/api/post", PostRouter);
app.use("/api/comment", CommentRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
})

