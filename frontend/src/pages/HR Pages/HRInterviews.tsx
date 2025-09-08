import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Plus } from "lucide-react";
import ClientContext from "../../context/ClientContext";
import JobOfferContext from "../../context/JobOfferContext";
import { useAuth } from "../../context/AuthContext";

type Interview = any;

export default function HRInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isOpen, setIsOpen] = useState(false);
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
    hr: "", // placeholder; if you have HR auth, fill accordingly
    jobOffer: "",
  });

  const fetchInterviews = async () => {
    try {
      const res = await axios.get("http://localhost:3000/interviews");
      setInterviews(res.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInterviews();
  }, []);

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
      await axios.post("http://localhost:3000/interviews", body);
      await fetchInterviews();
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Interview scheduled",
        showConfirmButton: false,
        timer: 1800,
      });
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
        title: "Failed to schedule",
        showConfirmButton: false,
        timer: 1800,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-100">Interviews</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-500"
        >
          <Plus className="w-4 h-4" /> New Interview
        </button>
      </div>

      <div className="rounded-lg border border-slate-800 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-800 text-slate-300">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Client</th>
              <th className="py-3 px-4 text-left">Job Offer</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Time</th>
              <th className="py-3 px-4 text-left">Mode</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {interviews.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-6 text-center text-slate-400">
                  No interviews scheduled
                </td>
              </tr>
            ) : (
              interviews.map((iv: any) => (
                <tr key={iv._id} className="hover:bg-slate-800/40">
                  <td className="py-3 px-4 text-slate-100">{iv.title}</td>
                  <td className="py-3 px-4 text-slate-300">{iv.client?.name || iv.client}</td>
                  <td className="py-3 px-4 text-slate-300">{iv.jobOffer?.title || iv.jobOffer}</td>
                  <td className="py-3 px-4 text-slate-300">{String(iv.date).split("T")[0]}</td>
                  <td className="py-3 px-4 text-slate-300">{iv.time}</td>
                  <td className="py-3 px-4 text-slate-300">{iv.mode}{iv.location ? ` • ${iv.location}` : ""}</td>
                  <td className="py-3 px-4">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                      {iv.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button onClick={() => { setForm({ title: iv.title, date: String(iv.date).split("T")[0], time: iv.time, mode: iv.mode, location: iv.location || "", notes: iv.notes || "", client: iv.client?._id || iv.client, hr: iv.hr?._id || iv.hr, jobOffer: iv.jobOffer?._id || iv.jobOffer }); setIsOpen(true); (window as any)._editId = iv._id; }} className="px-3 py-1.5 rounded bg-slate-800 text-slate-200 mr-2">Edit</button>
                    <button onClick={async () => { const c = await Swal.fire({ title: "Delete interview?", text: "This cannot be undone.", icon: "warning", showCancelButton: true, confirmButtonColor: "#dc2626", cancelButtonColor: "#334155", confirmButtonText: "Delete" }); if (c.isConfirmed) { await axios.delete(`http://localhost:3000/interviews/${iv._id}`); await fetchInterviews(); Swal.fire({ toast: true, position: "top-end", icon: "success", title: "Deleted", showConfirmButton: false, timer: 1500 }); } }} className="px-3 py-1.5 rounded bg-red-600 text-white">Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-lg w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-100">
                Schedule Interview
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-200"
              >
                ✕
              </button>
            </div>
            <form onSubmit={async (e) => {
              // if editing, do PUT; else POST
              if ((window as any)._editId) {
                e.preventDefault();
                try {
                  if (!form.title || !form.date || !form.time || !form.client || !form.jobOffer) {
                    return Swal.fire({ toast: true, position: "top-end", icon: "info", title: "Fill all required fields", showConfirmButton: false, timer: 1800 });
                  }
                  setLoading(true);
                  await axios.put(`http://localhost:3000/interviews/${(window as any)._editId}`, { ...form, hr: (form.hr || (undefined as any)) });
                  (window as any)._editId = undefined;
                  await fetchInterviews();
                  Swal.fire({ toast: true, position: "top-end", icon: "success", title: "Interview updated", showConfirmButton: false, timer: 1800 });
                  setIsOpen(false);
                  setForm({ title: "", date: "", time: "", mode: "Online", location: "", notes: "", client: "", hr: "", jobOffer: "" });
                } catch (err) {
                  Swal.fire({ toast: true, position: "top-end", icon: "error", title: "Failed to update", showConfirmButton: false, timer: 1800 });
                } finally {
                  setLoading(false);
                }
                return;
              }
              handleSubmit(e);
            }}>
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
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-200 rounded"
                >
                  Cancel
                </button>
                <button
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
                >
                  {loading ? "Saving..." : ((window as any)._editId ? "Update" : "Save")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
