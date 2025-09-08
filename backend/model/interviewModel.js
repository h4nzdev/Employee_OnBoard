import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    mode: { type: String, enum: ["Online", "In-Person"], default: "Online" },
    location: { type: String, default: "" },
    notes: { type: String, default: "" },
    status: {
      type: String,
      enum: ["Scheduled", "Completed", "Cancelled"],
      default: "Scheduled",
    },
    client: { type: mongoose.Schema.Types.ObjectId, ref: "clients", required: true },
    hr: { type: mongoose.Schema.Types.ObjectId, ref: "hr", required: true },
    jobOffer: { type: mongoose.Schema.Types.ObjectId, ref: "JobOffer", required: true },
  },
  { timestamps: true }
);

const Interview = mongoose.model("Interview", interviewSchema, "interviews");
export default Interview;


