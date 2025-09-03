import Clients from "../model/clientModel.js";
import HR from "../model/hrModel.js";

export const loginClient = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isExisted = await Clients.findOne({ email });
    if (!isExisted) {
      return res.status(404).json({ error: "User not found" });
    }

    if (isExisted.password !== password) {
      return res.status(401).json({ error: "Wrong password!" });
    }

    res.status(200).json(isExisted);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Server Error: ${error.message}` });
  }
};

export const loginHR = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hr = await HR.findOne({ email });
    if (!hr) {
      return res.status(404).json({ error: "HR account not found" });
    }

    if (hr.password !== password) {
      return res.status(401).json({ error: "Wrong password!" });
    }

    res.status(200).json(hr);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Server Error: ${error.message}` });
  }
};

export const registerClient = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      type,
      skills,
      experienceLevel,
      linkedinProfile,
      notes,
    } = req.body;

    const existingClient = await Clients.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ error: "Email already registered!" });
    }

    const newClient = new Clients({
      name,
      email,
      phone,
      password,
      type,
      skills,
      experienceLevel,
      linkedinProfile,
      notes,
    });
    await newClient.save();

    // Return the client data directly for frontend session storage
    res.status(201).json(newClient);
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: `Server Error: ${error.message}` });
  }
};

export const registerHR = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      department,
      position,
      phone,
      profileImage,
    } = req.body;

    // Check if HR with this email already exists
    const existingHR = await HR.findOne({ email });
    if (existingHR) {
      return res.status(400).json({ error: "Email already registered!" });
    }

    // Create new HR account
    const newHR = new HR({
      name,
      email,
      password,
      department,
      position,
      phone,
      profileImage,
    });
    await newHR.save();

    // Return the HR data directly for frontend session storage
    res.status(201).json(newHR);
  } catch (error) {
    console.error("Error during HR registration:", error);
    res.status(500).json({ error: `Server Error: ${error.message}` });
  }
};
