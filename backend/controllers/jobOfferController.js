import JobOffers from "../model/jobModel.js";

// Add a new job offer
export const addJobOffer = async (req, res) => {
  try {
    const newJob = req.body;
    const createdJob = await JobOffers.create(newJob);
    res.status(201).json(createdJob);
  } catch (error) {
    console.error("Error adding job offer:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all job offers
export const getJobOffers = async (req, res) => {
  try {
    const jobs = await JobOffers.find();
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching job offers:", error);
    res.status(500).json({ message: "Server error" });
  }
};
