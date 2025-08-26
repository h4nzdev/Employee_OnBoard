import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    assignee: { type: String, required: true },
    priority: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
    status: {
      type: String,
      enum: ["Not Started", "In Progress", "Completed", "On Hold"],
      default: "Not Started",
    },
    category: { type: String, required: true },
    startDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    progress: { type: Number, min: 0, max: 100, default: 0 },
    description: { type: String },
  },
  { _id: true }
);

const EmployeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    role: { type: String, required: true },
    department: { type: String, required: true },
    status: { type: String, required: true },
    tasks: [TaskSchema], // <-- Embed tasks array here
  },
  { timestamps: true }
);

const Employees = mongoose.model("employees", EmployeeSchema);
export default Employees;
