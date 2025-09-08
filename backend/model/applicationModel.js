import mongoose from "mongoose";

// 🔹 Subdocument for requirements
const RequirementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  priority: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Submitted"],
    default: "Pending",
  },
  type: { type: String, required: true },
  dueDate: { type: Date, required: true },
  submittedDate: { type: Date, default: null },
  description: { type: String, default: "" },
  file: { type: String, default: null },
});

// 🔹 Main Application schema
const applicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // applicant full name
    email: { type: String, required: true },
    phone: { type: String },
    type: { type: String, default: "New Registration" },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },

    // Application form details
    skills: [String],
    experienceLevel: { type: String },
    linkedinProfile: { type: String },
    notes: { type: String },

    // Application metadata
    applicationDate: { type: Date, default: Date.now },

    // 🔗 Link to JobOffer (optional)
    jobOffer: { type: mongoose.Schema.Types.ObjectId, ref: "JobOffer" },

    // 🔗 Link to the Client who owns this application
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },

    // ✅ Requirements embedded here
    requirements: [RequirementSchema],
  },
  { timestamps: true }
);

const Application = mongoose.model(
  "Application",
  applicationSchema,
  "applications"
);

export default Application;
