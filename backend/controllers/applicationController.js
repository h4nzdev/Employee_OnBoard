import Application from "../model/applicationModel.js";

export const addApplication = async (req, res) => {
  try {
    // get data from the request body (the form the client fills)
    const {
      name,
      email,
      phone,
      skills,
      experienceLevel,
      linkedinProfile,
      notes,
      jobOfferId, // this links the application to a job
    } = req.body;

    // create a new application
    const newApplication = new Application({
      name,
      email,
      phone,
      skills,
      experienceLevel,
      linkedinProfile,
      notes,
      jobOffer: jobOfferId, // link to JobOffer
    });

    // save to db
    await newApplication.save();

    res.status(201).json({
      message: "Application submitted successfully ✅",
      application: newApplication,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while submitting application ❌",
      error: error.message,
    });
  }
};

// 📌 Get all applications
export const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("jobOffer") // show job offer details instead of just ID
      .sort({ createdAt: -1 }); // newest first

    res.status(200).json({
      message: "All applications fetched successfully ✅",
      applications,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while fetching applications ❌",
      error: error.message,
    });
  }
};
