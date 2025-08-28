import mongoose from "mongoose";

const RequirementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  priority: { type: String, required: true }, // High, Medium, Low
  status: { type: String, default: "Pending" }, // Pending, Submitted, Approved
  type: { type: String, required: true }, // e.g., Identity Verification, Employment
  dueDate: { type: Date, required: true },
  submittedDate: { type: Date, default: null },
  description: { type: String, default: "" },
});

const ClientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    status: { type: String, default: "Pending" }, // Pending, Accepted, Rejected
    requirements: [RequirementSchema],
  },
  { timestamps: true }
);

const Clients = mongoose.model("clients", ClientSchema);

export default Clients;
