import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.TOKEN_MONGODB);
    console.log("MongoDB Atlas connected!");
  } catch (err) {
    console.log(err.message);
  }
}

export async function disconnectDb() {
  await mongoose.disconnect();
}
