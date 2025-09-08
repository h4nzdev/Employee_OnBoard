import express from "express";
import { createInterview, listInterviews, updateInterview, deleteInterview } from "../controllers/interviewController.js";

const interviewRoutes = express.Router();

interviewRoutes.post("/interviews", createInterview);
interviewRoutes.get("/interviews", listInterviews);
interviewRoutes.put("/interviews/:id", updateInterview);
interviewRoutes.delete("/interviews/:id", deleteInterview);

export default interviewRoutes;


