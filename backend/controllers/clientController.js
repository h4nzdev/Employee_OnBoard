import Clients from "../model/clientModel.js";

//Get all client
export const getAllClient = async (req, res) => {
  try {
    const clients = await Clients.find();

    if (!clients) {
      return res.status(404).json({ message: "No client can be found!" });
    }

    res.status(200).json(clients);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add a new client
// Add a new client
// Add a new client (with status + type, simple skills)
export const addClient = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      appliedJob, // job offer ID
      experienceLevel,
      linkedinProfile,
      applicationDate,
      skills, // keep simple: send as ["React","Node"]
      notes,
      status, // ✅ put back
      type, // ✅ put back
    } = req.body;

    // prevent duplicate by email (keep this from your original)
    const existingClient = await Clients.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: "Client already exists!" });
    }

    const newClient = await Clients.create({
      name,
      email,
      phone,
      appliedJob,
      experienceLevel,
      linkedinProfile,
      applicationDate: applicationDate || Date.now(),
      skills,
      notes,
      status,
      type, 
      requirements: [], 
    });

    res.status(201).json(newClient);
  } catch (error) {
    console.error("Error adding client:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add a requirement to a client using $push
export const addRequirement = async (req, res) => {
  try {
    const { clientId } = req.params;
    const { requirements } = req.body;
    // requirement is an object: { title, type, status, dueDate, submittedDate, description }

    const updatedClient = await Clients.findByIdAndUpdate(
      clientId,
      { $push: { requirements: requirements } },
      { new: true } // return the updated document
    );

    if (!updatedClient) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json(updatedClient);
  } catch (error) {
    console.error("Error adding requirement:", error);
    res.status(500).json({ message: "Server error" });
  }
};
