import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose
    .connect(
      "mongo url"
    )
    .then(() => {
      console.log("OK db Connected successfully");
    })
    .catch((e) => {
      console.log("Error", e);
    });
};
