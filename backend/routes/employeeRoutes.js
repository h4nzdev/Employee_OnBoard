import express from "express";
import {
  getAllEmployees,
  addEmployee,
} from "../controllers/employeeController.js";

const employeeRouter = express.Router();

employeeRouter.get("/get", getAllEmployees);
employeeRouter.post("/add-employee", addEmployee);

export default employeeRouter;
