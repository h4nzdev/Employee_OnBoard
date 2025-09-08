import { useState } from "react";
import Swal from "sweetalert2";

export default function ClientInterviewSchedule() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    mode: "Online",
    location: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!form.title || !form.date || !form.time) {
        return Swal.fire({
          toast: true,
          position: "top-end",
          icon: "info",
          title: "Please fill required fields",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      setSubmitting(true);
      // Placeholder: Later wire to backend endpoint
      await new Promise((r) => setTimeout(r, 600));
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Interview request sent",
        showConfirmButton: false,
        timer: 1800,
      });
      setForm({
        title: "",
        date: "",
        time: "",
        mode: "Online",
        location: "",
        notes: "",
      });
    } catch (error) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Failed to submit",
        showConfirmButton: false,
        timer: 1800,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen p-6">
      <h2 className="text-2xl font-bold text-slate-100 mb-6">
        Schedule Interview
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl border border-slate-800 rounded-lg p-6 bg-slate-900"
      >
        <div className="mb-4">
          <label className="block text-sm text-slate-300 mb-1">Title *</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Date *</label>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Time *</label>
            <input
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm text-slate-300 mb-1">Mode</label>
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
          <div className="mb-4">
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
        <div className="mb-6">
          <label className="block text-sm text-slate-300 mb-1">Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100"
          />
        </div>
        <div className="flex justify-end">
          <button
            disabled={submitting}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
