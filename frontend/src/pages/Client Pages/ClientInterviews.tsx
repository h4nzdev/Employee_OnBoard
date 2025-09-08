import { useEffect, useState, useContext } from "react";
import { Plus, X } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthContext";
import JobOfferContext from "../../context/JobOfferContext";

type Interview = any;

export default function ClientInterviews() {
  const { user } = useAuth() as any;
  const { jobOffer } = useContext(JobOfferContext) as any;
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const fetchInterviews = async () => {
    try {
      const res = await axios.get("http://localhost:3000/interviews");
      const all = res.data || [];
      const mine = all.filter((iv: any) => String(iv.client?._id || iv.client) === String(user?._id));
      setInterviews(mine);
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

  const createInterview = async () => {
    if (!form.title || !form.date || !form.time || !form.jobOffer) {
      return Swal.fire({ toast: true, position: "top-end", icon: "info", title: "Fill all required fields", showConfirmButton: false, timer: 1800 });
    }
    setLoading(true);
    await axios.post("http://localhost:3000/interviews", { ...form, client: user?._id });
    await fetchInterviews();
    Swal.fire({ toast: true, position: "top-end", icon: "success", title: "Interview requested", showConfirmButton: false, timer: 1800 });
    setIsOpen(false);
    setForm({ title: "", date: "", time: "", mode: "Online", location: "", notes: "", client: "", hr: "", jobOffer: "" });
    setLoading(false);
  };

  return (
    <div className="bg-slate-900 min-h-screen p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-100">My Interviews</h2>
        <button onClick={() => setIsOpen(true)} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-500">
          <Plus className="w-4 h-4" /> Request Interview
        </button>
      </div>

      <div className="rounded-lg border border-slate-800 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-800 text-slate-300">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Job Offer</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Time</th>
              <th className="py-3 px-4 text-left">Mode</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {interviews.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-6 text-center text-slate-400">No interviews yet</td>
              </tr>
            ) : (
              interviews.map((iv: any) => (
                <tr key={iv._id} className="hover:bg-slate-800/40">
                  <td className="py-3 px-4 text-slate-100">{iv.title}</td>
                  <td className="py-3 px-4 text-slate-300">{iv.jobOffer?.title || iv.jobOffer}</td>
                  <td className="py-3 px-4 text-slate-300">{String(iv.date).split("T")[0]}</td>
                  <td className="py-3 px-4 text-slate-300">{iv.time}</td>
                  <td className="py-3 px-4 text-slate-300">{iv.mode}{iv.location ? ` • ${iv.location}` : ""}</td>
                  <td className="py-3 px-4">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">{iv.status}</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm w-full max-w-lg max-h-[90vh] overflow-y-auto scrollable">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <h2 className="text-xl font-bold text-slate-100">Request Interview</h2>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={(e) => { e.preventDefault(); createInterview(); }} className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Title *</label>
                <input name="title" value={form.title} onChange={handleChange} className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Date *</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Time *</label>
                  <input type="time" name="time" value={form.time} onChange={handleChange} className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Mode</label>
                <select name="mode" value={form.mode} onChange={handleChange} className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100">
                  <option>Online</option>
                  <option>In-Person</option>
                </select>
              </div>
              {form.mode === "In-Person" && (
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Location</label>
                  <input name="location" value={form.location} onChange={handleChange} className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100" />
                </div>
              )}
              <div>
                <label className="block text-sm text-slate-300 mb-1">Job Offer *</label>
                <select name="jobOffer" value={form.jobOffer} onChange={handleChange} className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100">
                  <option value="">Select job offer</option>
                  {jobOffer.map((j: any) => (
                    <option key={j._id} value={j._id}>{j.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Notes</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100" />
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-3 mt-2">
                <button onClick={() => setIsOpen(false)} type="button" className="px-4 py-2 text-slate-400 hover:text-slate-100">Cancel</button>
                <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">{loading ? "Submitting..." : "Submit"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


