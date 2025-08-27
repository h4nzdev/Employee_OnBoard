import express from "express";
import {
  getAllEmployees,
  addEmployee,
  addTaskEmployee,
} from "../controllers/employeeController.js";

const employeeRouter = express.Router();

employeeRouter.get("/get", getAllEmployees);
employeeRouter.post("/add-employee", addEmployee);
employeeRouter.post("/add-task/:employeeId", addTaskEmployee);

export default employeeRouter;
