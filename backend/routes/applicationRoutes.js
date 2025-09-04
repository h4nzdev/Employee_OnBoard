import express from "express";
import {
  addApplication,
  getAllApplications,
} from "../controllers/applicationController.js";

const applicationRoutes = express.Router();

applicationRoutes.post("/add/application", addApplication);
applicationRoutes.get("/get/application", getAllApplications);

export default applicationRoutes;
