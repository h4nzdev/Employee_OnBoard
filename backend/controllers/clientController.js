import Clients from "../model/clientModel.js";

// Add a new client
export const addClient = async (req, res) => {
  try {
    const { name, email, status } = req.body;

    const existingClient = await Clients.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: "Client already exists!" });
    }

    const newClient = await Clients.create({ name, email, status, requirements: [] });

    res.status(201).json(newClient);
  } catch (error) {
    console.error("Error adding client:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add a requirement to a client using $push
export const addRequirement = async (req, res) => {
  try {
    const { clientId, requirement } = req.body;
    // requirement is an object: { title, type, status, dueDate, submittedDate, description }

    const updatedClient = await Clients.findByIdAndUpdate(
      clientId,
      { $push: { requirements: requirement } },
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
