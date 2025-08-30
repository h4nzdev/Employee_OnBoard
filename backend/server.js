import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import employeeRouter from "./routes/employeeRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import jobOfferRouter from "./routes/jobOfferRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();
const PORT = process.env.PORT || 3000;

app.use("/employees", employeeRouter);
app.use("/client", clientRoutes);
app.use("/job-offer", jobOfferRouter);

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));
