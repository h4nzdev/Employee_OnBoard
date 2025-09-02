import mongoose from "mongoose";

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
});

const ClientSchema = new mongoose.Schema(
  {
    // 🔹 Basic info
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, default: "" },
    password: { type: String, required: true },
    role: { type: String, default: "Client" },
    type: { type: String, default: "New Registration" },
    status: {
      type: String,
      enum: ["Pending", "Rejected", "Approved"],
      default: "Pending",
    },
    skills: { type: [String], default: [] },

    // 🔹 Job reference
    appliedJob: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "job_offers",
    }, // Position Applied For

    // 🔹 Experience level
    experienceLevel: {
      type: String,
      enum: [
        "Entry Level (0-2 years)",
        "Junior (2-4 years)",
        "Mid-level (4-7 years)",
        "Senior (7-10 years)",
        "Lead/Principal (10+ years)",
      ],
      default: "Entry Level (0-2 years)",
    },

    // 🔹 Optional fields
    linkedinProfile: { type: String, default: "" },
    applicationDate: { type: Date, default: Date.now },
    skills: { type: [String], default: [] }, // Key Skills
    notes: { type: String, default: "" },

    // 🔹 Requirements (still useful for onboarding)
    requirements: [RequirementSchema],
  },
  { timestamps: true }
);

const Clients = mongoose.model("clients", ClientSchema);

export default Clients;
