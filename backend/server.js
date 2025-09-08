import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import clientRoutes from "./routes/clientRoutes.js";
import jobOfferRouter from "./routes/jobOfferRoutes.js";
import authRouter from "./routes/authRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import interviewRoutes from "./routes/interviewRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
// serve uploaded files statically
app.use("/uploads", express.static("uploads"));

connectDB();
const PORT = process.env.PORT || 3000;

app.use("/client", clientRoutes);
app.use("/job-offer", jobOfferRouter);
app.use("/", authRouter);
app.use("/", applicationRoutes);
app.use("/", interviewRoutes);

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));
