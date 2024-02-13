import mongoose from "mongoose";
export async function conn() {
  try {
    await mongoose.connect("mongodb://localhost:27018/testdb");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
}
