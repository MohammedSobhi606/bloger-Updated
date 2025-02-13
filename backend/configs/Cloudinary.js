import { v2 as cloudinary } from "cloudinary";

const ConnectCloudinary = async () => {
  try {
    await cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });
    console.log("Cloudinary Connected successfully");
  } catch (error) {
    console.log("Error connecting to Cloudinary", error);
  }
};
export default ConnectCloudinary;
