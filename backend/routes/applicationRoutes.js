import express from "express";
import {
  addApplication,
  getAllApplications,
  updateApplicationStatus,
  addRequirement,
} from "../controllers/applicationController.js";

const applicationRoutes = express.Router();

applicationRoutes.post("/add/application", addApplication);
applicationRoutes.get("/get/application", getAllApplications);
applicationRoutes.put("/application/update/:id", updateApplicationStatus);
applicationRoutes.post(
  "/application/add-requirements/:applicationId",
  addRequirement
);

export default applicationRoutes;
