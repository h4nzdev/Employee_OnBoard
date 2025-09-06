import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Upload, Calendar } from "lucide-react";
import ApplicationContext from "../../context/ApplicationContext";
import { getPriorityColor } from "../../utils/client_req_table";

export default function ClientDocumentsSubmit() {
  const { id } = useParams();
  const { applications } = useContext(ApplicationContext);

  // Find the specific requirement
  let requirement;
  for (let app of applications) {
    requirement = app.requirements?.find((req) => req._id === id);
    if (requirement) break;
  }

  if (!requirement)
    return <div className="text-slate-100 p-6">Requirement not found.</div>;

  return (
    <div className="min-h-screen bg-slate-950/50 p-6">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-100 mb-2">
            Submit Requirement
          </h1>
          <p className="text-slate-400">
            Please submit the requested document below. Make sure the file is
            clear and readable.
          </p>
        </div>

        {/* Static Form Layout */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
          {/* Requirement Info */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-semibold text-slate-100">
                {requirement.title}
              </h3>
              <span
                className={`px-3 py-1 text-sm rounded-full ${getPriorityColor(
                  requirement.priority
                )}`}
              >
                {requirement.priority}
              </span>
            </div>
            <p className="text-slate-400 mb-4">
              {requirement.description || "No description provided."}
            </p>
            <div className="flex items-center text-sm text-slate-500">
              <Calendar className="w-4 h-4 mr-2" />
              Due Date:{" "}
              {requirement.dueDate ? requirement.dueDate.split("T")[0] : "N/A"}
            </div>
          </div>

          {/* File Upload Section (Static) */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-400 mb-3">
              Upload Document <span className="text-red-400">*</span>
            </label>
            <div className="border-2 border-slate-600 border-dashed rounded-lg p-8 text-center bg-slate-800/50">
              <Upload className="w-12 h-12 mx-auto mb-4 text-slate-400" />
              <p className="text-lg text-slate-300 mb-2">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-sm text-slate-500 mb-4">
                PDF, JPG, PNG files only (Maximum size: 10MB)
              </p>
              <button className="bg-slate-700 text-slate-300 px-4 py-2 rounded-lg">
                Browse Files
              </button>
            </div>
          </div>

          {/* Notes (Static) */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              placeholder="Add any additional notes..."
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500"
              readOnly
            />
          </div>

          {/* Buttons (Static) */}
          <div className="flex justify-end gap-3">
            <button className="px-6 py-2 text-slate-400">Cancel</button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
              Submit Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
