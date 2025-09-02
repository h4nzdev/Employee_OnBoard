import express from "express";
import { loginClient, registerClient } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/client/login", loginClient);
authRouter.post("/client/register", registerClient);

export default authRouter;
