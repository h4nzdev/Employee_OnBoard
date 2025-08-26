import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database!");
  } catch (error) {
    console.error("MongoDB failed to connect : ", error);
    process.exit(1);
  }
};

export default connectDB;
