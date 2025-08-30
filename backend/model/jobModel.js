import mongoose from "mongoose";

const JobOfferSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    slots: { type: Number, required: true },
    status: { type: String, default: "Open" }, // Open, Closed
    location: { type: String, default: "Remote" },
    postedDate: { type: Date, default: Date.now },
    deadline: { type: Date },
    priority: { type: String, default: "Medium" }, // High, Medium, Low
    department: { type: String, default: "" },
    experienceLevel: { type: String, default: "Junior" }, // Junior, Mid, Senior
    salaryRange: { type: String, default: "" },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

const JobOffers = mongoose.model("job_offers", JobOfferSchema);

export default JobOffers;
