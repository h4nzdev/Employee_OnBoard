import Interview from "../model/interviewModel.js";

export const createInterview = async (req, res) => {
  try {
    const { title, date, time, mode, location, notes, client, hr, jobOffer } = req.body;
    if (!title || !date || !time || !client || !hr || !jobOffer) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const interview = await Interview.create({
      title,
      date,
      time,
      mode,
      location,
      notes,
      client,
      hr,
      jobOffer,
    });

    res.status(201).json(interview);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const listInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find()
      .populate("client")
      .populate("hr")
      .populate("jobOffer")
      .sort({ createdAt: -1 });
    res.status(200).json(interviews);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateInterview = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Interview.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Interview not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteInterview = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Interview.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Interview not found" });
    res.status(200).json({ message: "Interview deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


