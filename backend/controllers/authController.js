import Clients from "../model/clientModel.js";

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

    res.status(201).json({
      message: "Registration successful!",
      client: newClient,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: `Server Error: ${error.message}` });
  }
};
