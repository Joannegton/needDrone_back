import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.TOKEN_MONGODB);
    console.log("Conectado ao MongoDB");
  } catch (err) {
    console.log(err.message);
  }
}

export async function disconnectDb() {
  await mongoose.disconnect();
}
