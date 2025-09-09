import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ClientContext from "../../../context/ClientContext";
import JobOfferContext from "../../../context/JobOfferContext";
import { useAuth } from "../../../context/AuthContext";

interface AddInterviewProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onInterviewAdded: () => void;
  editData?: {
    _id: string;
    title: string;
    date: string;
    time: string;
    mode: string;
    location: string;
    notes: string;
    client: string;
    hr: string;
    jobOffer: string;
  } | null;
}

const AddInterview = ({ isOpen, setIsOpen, onInterviewAdded, editData }: AddInterviewProps) => {
  const [loading, setLoading] = useState(false);
  const { client } = useContext(ClientContext) as any;
  const { jobOffer } = useContext(JobOfferContext) as any;
  const { user } = useAuth() as any;

  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    mode: "Online",
    location: "",
    notes: "",
    client: "",
    hr: "",
    jobOffer: "",
  });

  // Update form when editData changes
  useEffect(() => {
    if (editData) {
      setForm({
        title: editData.title || "",
        date: editData.date || "",
        time: editData.time || "",
        mode: editData.mode || "Online",
        location: editData.location || "",
        notes: editData.notes || "",
        client: editData.client || "",
        hr: editData.hr || "",
        jobOffer: editData.jobOffer || "",
      });
    } else {
      // Reset form when creating new interview
      setForm({
        title: "",
        date: "",
        time: "",
        mode: "Online",
        location: "",
        notes: "",
        client: "",
        hr: "",
        jobOffer: "",
      });
    }
  }, [editData]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (
        !form.title ||
        !form.date ||
        !form.time ||
        !form.client ||
        !form.jobOffer
      ) {
        return Swal.fire({
          toast: true,
          position: "top-end",
          icon: "info",
          title: "Fill all required fields",
          showConfirmButton: false,
          timer: 1800,
        });
      }
      setLoading(true);
      const body = { ...form, hr: user?._id };
      
      if (editData) {
        // Update existing interview
        await axios.put(`http://localhost:3000/interviews/${editData._id}`, body);
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Interview updated",
          showConfirmButton: false,
          timer: 1800,
        });
      } else {
        // Create new interview
        await axios.post("http://localhost:3000/interviews", body);
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Interview scheduled",
          showConfirmButton: false,
          timer: 1800,
        });
      }
      
      onInterviewAdded();
      setIsOpen(false);
      setForm({
        title: "",
        date: "",
        time: "",
        mode: "Online",
        location: "",
        notes: "",
        client: "",
        hr: "",
        jobOffer: "",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: editData ? "Failed to update" : "Failed to schedule",
        showConfirmButton: false,
        timer: 1800,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset form will be handled by useEffect when editData becomes null
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-slate-900 border border-slate-800 rounded-lg w-full max-w-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-100">
            {editData ? "Edit Interview" : "Schedule Interview"}
          </h3>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-200"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-sm text-slate-300 mb-1">
              Title *
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100"
              />
            </div>
    <div>
              <label className="block text-sm text-slate-300 mb-1">
                Time *
              </label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="block text-sm text-slate-300 mb-1">
              Mode
            </label>
            <select
              name="mode"
              value={form.mode}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100"
            >
              <option>Online</option>
              <option>In-Person</option>
            </select>
          </div>
          {form.mode === "In-Person" && (
            <div className="mb-3">
              <label className="block text-sm text-slate-300 mb-1">
                Location
              </label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100"
              />
            </div>
          )}
          <div className="mb-3">
            <label className="block text-sm text-slate-300 mb-1">
              Client *
            </label>
            <select
              name="client"
              value={form.client}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100"
            >
              <option value="">Select client</option>
              {client.map((c: any) => (
                <option key={c._id} value={c._id}>
                  {c.name} ({c.email})
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="block text-sm text-slate-300 mb-1">
              Job Offer *
            </label>
            <select
              name="jobOffer"
              value={form.jobOffer}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100"
            >
              <option value="">Select job offer</option>
              {jobOffer.map((j: any) => (
                <option key={j._id} value={j._id}>
                  {j.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm text-slate-300 mb-1">
              Notes
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 bg-slate-800 text-slate-200 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              {loading ? "Saving..." : (editData ? "Update" : "Save")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInterview;
