import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://moha3000:123456moha@cluster0.swrpk.mongodb.net/bloger"
    )
    .then(() => {
      console.log("OK db Connected successfully");
    })
    .catch((e) => {
      console.log("Error", e);
    });
};
