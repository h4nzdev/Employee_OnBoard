import express from "express";
import {
  addApplication,
  getAllApplications,
  updateApplicationStatus,
  addRequirement,
  uploadRequirementFile,
} from "../controllers/applicationController.js";
import multer from "multer";
import path from "path";

// basic multer setup storing files in ./uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const applicationRoutes = express.Router();

applicationRoutes.post("/add/application", addApplication);
applicationRoutes.get("/get/application", getAllApplications);
applicationRoutes.put("/application/update/:id", updateApplicationStatus);
applicationRoutes.post(
  "/application/add-requirements/:applicationId",
  addRequirement
);

// upload a single file for a specific requirement in an application
// expects fields: file, applicationId, requirementId
applicationRoutes.post(
  "/application/upload",
  upload.single("file"),
  uploadRequirementFile
);

export default applicationRoutes;
