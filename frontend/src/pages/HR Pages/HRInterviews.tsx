import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Plus } from "lucide-react";
import AddInterview from "../../components/HRComponents/AddInterview/AddInterview";

type Interview = any;

export default function HRInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

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

  const handleEdit = (interview: any) => {
    setEditData({
      _id: interview._id,
      title: interview.title,
      date: String(interview.date).split("T")[0],
      time: interview.time,
      mode: interview.mode,
      location: interview.location || "",
      notes: interview.notes || "",
      client: interview.client?._id || interview.client,
      hr: interview.hr?._id || interview.hr,
      jobOffer: interview.jobOffer?._id || interview.jobOffer,
    });
    setIsOpen(true);
  };


  return (
    <div className="bg-slate-900 min-h-screen p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-100">Interviews</h2>
        <button
          onClick={() => {
            setEditData(null);
            setIsOpen(true);
          }}
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
                    <button onClick={() => handleEdit(iv)} className="px-3 py-1.5 rounded bg-slate-800 text-slate-200 mr-2">Edit</button>
                    <button onClick={async () => { const c = await Swal.fire({ title: "Delete interview?", text: "This cannot be undone.", icon: "warning", showCancelButton: true, confirmButtonColor: "#dc2626", cancelButtonColor: "#334155", confirmButtonText: "Delete" }); if (c.isConfirmed) { await axios.delete(`http://localhost:3000/interviews/${iv._id}`); await fetchInterviews(); Swal.fire({ toast: true, position: "top-end", icon: "success", title: "Deleted", showConfirmButton: false, timer: 1500 }); } }} className="px-3 py-1.5 rounded bg-red-600 text-white">Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <AddInterview
        isOpen={isOpen}
        setIsOpen={(open) => {
          setIsOpen(open);
          if (!open) {
            setEditData(null);
          }
        }}
        onInterviewAdded={fetchInterviews}
        editData={editData}
      />
    </div>
  );
}