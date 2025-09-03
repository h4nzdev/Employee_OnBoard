import mongoose from "mongoose";

const HRSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "HR" },
    department: { type: String, required: true },
    position: { type: String, required: true },
    phone: { type: String },
    profileImage: { type: String },
  },
  { timestamps: true }
);

const HR = mongoose.model("hr", HRSchema);

export default HR;