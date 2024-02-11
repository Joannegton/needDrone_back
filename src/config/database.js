import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect("mongodb+srv://bolacha:key2307@havedrone.ungqybe.mongodb.net/?retryWrites=true&w=majority");
    console.log("MongoDB Atlas connected!");
  } catch (err) {
    console.log(err.message);
  }
}

export async function disconnectDb() {
  await mongoose.disconnect();
}
