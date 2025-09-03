import express from "express";
import { loginClient, registerClient, loginHR, registerHR } from "../controllers/authController.js";

const authRouter = express.Router();

// Client authentication routes
authRouter.post("/client/login", loginClient);
authRouter.post("/client/register", registerClient);

// HR authentication routes
authRouter.post("/hr/login", loginHR);
authRouter.post("/hr/register", registerHR);

export default authRouter;
