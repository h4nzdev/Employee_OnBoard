import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // applicant full name
    email: { type: String, required: true },
    phone: { type: String },
    type: { type: String, default: "New Registration" }, // e.g., New Registration, Referral
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },

    // Application form details
    skills: [String],
    experienceLevel: { type: String }, // Junior, Mid, Senior
    linkedinProfile: { type: String },
    notes: { type: String },

    // Application metadata
    applicationDate: { type: Date, default: Date.now },

    // Link to JobOffer (optional)
    jobOffer: { type: mongoose.Schema.Types.ObjectId, ref: "JobOffer" },
  },
  { timestamps: true }
);

const Application = mongoose.model(
  "Application",
  applicationSchema,
  "applications"
);

export default Application;
