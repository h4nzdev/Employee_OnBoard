import { useState } from "react";
import {
  X,
  Download,
  Eye,
  FileText,
  Calendar,
  User,
  AlertCircle,
} from "lucide-react";

interface RequirementViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  requirement: {
    _id: string;
    title: string;
    name: string;
    priority: "Low" | "Medium" | "High";
    status: "Pending" | "In Progress" | "Submitted";
    type: string;
    dueDate: string;
    submittedDate: string | null;
    description: string;
    file: string | null;
  } | null;
}

const RequirementViewModal = ({
  isOpen,
  onClose,
  requirement,
}: RequirementViewModalProps) => {
  const [imageError, setImageError] = useState(false);

  if (!isOpen || !requirement) return null;

  // Helper function to get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-900/30 text-red-400 border-red-800";
      case "Medium":
        return "bg-yellow-900/30 text-yellow-400 border-yellow-800";
      case "Low":
        return "bg-green-900/30 text-green-400 border-green-800";
      default:
        return "bg-gray-900/30 text-gray-400 border-gray-800";
    }
  };

  // Helper function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Submitted":
        return "bg-green-900/30 text-green-400 border-green-800";
      case "In Progress":
        return "bg-blue-900/30 text-blue-400 border-blue-800";
      case "Pending":
        return "bg-yellow-900/30 text-yellow-400 border-yellow-800";
      default:
        return "bg-gray-900/30 text-gray-400 border-gray-800";
    }
  };

  // Format date helper
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Not set";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Get file extension
  const getFileExtension = (filename: string) => {
    return filename.split(".").pop()?.toLowerCase() || "";
  };

  // Check if file is an image
  const isImageFile = (filename: string) => {
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
    return imageExtensions.includes(getFileExtension(filename));
  };

  // Handle file download
  const handleDownload = () => {
    if (requirement.file) {
      const link = document.createElement("a");
      link.href = `http://localhost:3000${requirement.file}`;
      link.download = requirement.file.split("/").pop() || "requirement-file";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden scrollable">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/20 rounded-lg">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-100">
                {requirement.title}
              </h2>
              <p className="text-sm text-slate-400">{requirement.type}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition-colors p-2 hover:bg-slate-800 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Status and Priority Badges */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-400">Status:</span>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                  requirement.status
                )}`}
              >
                {requirement.status}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-400">Priority:</span>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                  requirement.priority
                )}`}
              >
                {requirement.priority}
              </span>
            </div>
          </div>

          {/* Requirement Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-sm text-slate-400">Requirement Name</p>
                  <p className="text-slate-100 font-medium">
                    {requirement.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-sm text-slate-400">Due Date</p>
                  <p className="text-slate-100 font-medium">
                    {formatDate(requirement.dueDate)}
                  </p>
                </div>
              </div>

              {requirement.submittedDate && (
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-sm text-slate-400">Submitted Date</p>
                    <p className="text-green-400 font-medium">
                      {formatDate(requirement.submittedDate)}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-2">Description</p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-slate-200 text-sm leading-relaxed">
                  {requirement.description || "No description provided"}
                </p>
              </div>
            </div>
          </div>

          {/* File Section */}
          {requirement.status === "Submitted" && requirement.file ? (
            <div className="border-t border-slate-800 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-slate-100 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Submitted File
                </h3>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4">
                {isImageFile(requirement.file) ? (
                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src={`http://localhost:3000${requirement.file}`}
                        alt="Requirement submission"
                        className="w-full max-h-96 object-contain rounded-lg"
                        onError={() => setImageError(true)}
                      />
                      {imageError && (
                        <div className="flex items-center justify-center h-64 bg-slate-700 rounded-lg">
                          <div className="text-center">
                            <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                            <p className="text-slate-400">
                              Failed to load image
                            </p>
                            <button
                              onClick={handleDownload}
                              className="mt-2 text-blue-400 hover:text-blue-300 underline"
                            >
                              Download file instead
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-slate-400">
                      File: {requirement.file.split("/").pop()}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-32 bg-slate-700 rounded-lg">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-400 mb-2">
                        {requirement.file.split("/").pop()}
                      </p>
                      <button
                        onClick={handleDownload}
                        className="text-blue-400 hover:text-blue-300 underline"
                      >
                        Download to view
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : requirement.status === "Submitted" && !requirement.file ? (
            <div className="border-t border-slate-800 pt-6">
              <div className="flex items-center justify-center h-32 bg-slate-800/50 rounded-lg">
                <div className="text-center">
                  <AlertCircle className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                  <p className="text-slate-400">No file submitted</p>
                  <p className="text-sm text-slate-500">
                    This requirement was marked as submitted but no file was
                    uploaded
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="border-t border-slate-800 pt-6">
              <div className="flex items-center justify-center h-32 bg-slate-800/50 rounded-lg">
                <div className="text-center">
                  <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-400">No file available</p>
                  <p className="text-sm text-slate-500">
                    This requirement has not been submitted yet
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequirementViewModal;
