import express from "express";
import {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  addTaskEmployee,
  getEmployeeTasks,
  updateEmployeeTask,
  deleteEmployeeTask
} from "../controllers/employeeController.js";

const employeeRouter = express.Router();

employeeRouter.get("/get", getAllEmployees);
employeeRouter.get("/get/:id", getEmployeeById);
employeeRouter.post("/add-employee", addEmployee);
employeeRouter.put("/update/:id", updateEmployee);
employeeRouter.delete("/delete/:id", deleteEmployee);

// Task management routes
employeeRouter.post("/add-task/:employeeId", addTaskEmployee);
employeeRouter.get("/tasks/:employeeId", getEmployeeTasks);
employeeRouter.put("/tasks/:employeeId/:taskId", updateEmployeeTask);
employeeRouter.delete("/tasks/:employeeId/:taskId", deleteEmployeeTask);

export default employeeRouter;
