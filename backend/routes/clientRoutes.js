import express from "express";
import {
  addClient,
  addRequirement,
  getAllClient,
} from "../controllers/clientController.js";

const clientRoutes = express.Router();

clientRoutes.get("/get-clients", getAllClient);
clientRoutes.post("/add-client", addClient);
clientRoutes.post("/add-requirements/:clientId", addRequirement);

export default clientRoutes;
