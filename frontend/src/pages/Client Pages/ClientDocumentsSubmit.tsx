import { useNavigate, useParams } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { Upload, Calendar } from "lucide-react";
import ApplicationContext from "../../context/ApplicationContext";
import { getPriorityColor } from "../../utils/client_req_table";
import axios from "axios";
import Swal from "sweetalert2";

export default function ClientDocumentsSubmit() {
  const { id } = useParams();
  const { applications, fetchApplications } = useContext(ApplicationContext);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  // Find the specific requirement
  let requirement: any;
  let applicationId: any;
  for (let app of applications) {
    const found = app.requirements?.find((req) => req._id === id);
    if (found) {
      requirement = found;
      applicationId = app._id;
      break;
    }
  }

  if (!requirement)
    return <div className="text-slate-100 p-6">Requirement not found.</div>;

  const handleBrowse = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file || null);
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async () => {
    try {
      if (
        !fileInputRef.current ||
        !fileInputRef.current.files ||
        fileInputRef.current.files.length === 0
      ) {
        return Swal.fire({
          toast: true,
          position: "top-end",
          icon: "info",
          title: "Please choose a file first",
          showConfirmButton: false,
          timer: 2000,
        });
      }

      const file = fileInputRef.current.files[0];
      const form = new FormData();
      form.append("file", file);
      form.append("applicationId", applicationId as string);
      form.append("requirementId", id as string);

      setUploading(true);
      await axios.post("http://localhost:3000/application/upload", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await fetchApplications();

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Document submitted",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate(-1);

      // reset file inputs and preview
      if (fileInputRef.current) fileInputRef.current.value = "";
      setSelectedFile(null);
      setPreviewUrl(null);
    } catch (error) {
      console.error(error);
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Upload failed",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setUploading(false);
    }
  };

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

          {/* File Upload Section */}
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
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
              />
              <button
                onClick={handleBrowse}
                className="bg-slate-700 text-slate-300 px-4 py-2 rounded-lg"
              >
                Browse Files
              </button>
              {selectedFile && (
                <div className="mt-4 text-left">
                  <p className="text-slate-300 text-sm">
                    Selected: {selectedFile.name}
                  </p>
                  {previewUrl && (
                    <img
                      src={previewUrl}
                      alt="preview"
                      className="mt-3 mx-auto max-h-56 rounded border border-slate-700"
                    />
                  )}
                </div>
              )}
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

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button className="px-6 py-2 text-slate-400">Cancel</button>
            <button
              onClick={handleSubmit}
              disabled={uploading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
            >
              {uploading ? "Uploading..." : "Submit Document"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
