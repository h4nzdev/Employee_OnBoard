import express from "express";
import { getJobOffers, addJobOffer } from "../controllers/jobOfferController.js";

const jobOfferRouter = express.Router();

jobOfferRouter.get("/get-job", getJobOffers);
jobOfferRouter.post("/add-job", addJobOffer)

export default jobOfferRouter;
