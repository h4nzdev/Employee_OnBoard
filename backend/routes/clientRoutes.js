import express from "express";
import {
  addClient,
  addRequirement,
  getAllClient,
  approved,
} from "../controllers/clientController.js";

const clientRoutes = express.Router();

clientRoutes.get("/get-clients", getAllClient);
clientRoutes.post("/add-client", addClient);
clientRoutes.post("/add-requirements/:clientId", addRequirement);
clientRoutes.put("/update-client/:id", approved);

export default clientRoutes;
