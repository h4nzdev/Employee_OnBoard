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
      jobOfferId,
      client, // this links the application to a job
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
      jobOffer: jobOfferId,
      client, // link to JobOffer
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

// 📌 Update application status
export const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params; // application ID from URL
    const { status } = req.body; // new status from request body

    // check if status was provided
    if (!status) {
      return res.status(400).json({
        message: "Status is required ❌",
      });
    }

    // update the application
    const updatedApplication = await Application.findByIdAndUpdate(
      id,
      { status },
      { new: true } // return updated document
    );

    // if no application found
    if (!updatedApplication) {
      return res.status(404).json({
        message: "Application not found ❌",
      });
    }

    res.status(200).json({
      message: "Application status updated successfully ✅",
      application: updatedApplication,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while updating application status ❌",
      error: error.message,
    });
  }
};

export const addRequirement = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const { requirements } = req.body;
    // requirement is an object: { title, type, status, dueDate, submittedDate, description }

    const updatedApplication = await Application.findByIdAndUpdate(
      applicationId,
      { $push: { requirements: requirements } },
      { new: true } // return the updated document
    );

    if (!updatedApplication) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json(updatedApplication);
  } catch (error) {
    console.error("Error adding requirement:", error);
    res.status(500).json({ message: "Server error" });
  }
};
