import { AlertCircle, CheckCircle, FileText } from "lucide-react";

const ClientRightRequirements = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center">
        <FileText className="w-6 h-6 mr-3" />
        Document Requirements
      </h2>

      <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-100 mb-2">
              NSO Birth Certificate
            </h3>
            <p className="text-slate-400 mb-3">
              Document Verification Required
            </p>
            <p className="text-slate-300">
              Make sure to pass this in the exact due date
            </p>
          </div>
          <div className="flex space-x-3 ml-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-900/30 text-red-400 border border-red-800/50">
              <AlertCircle className="w-4 h-4 mr-1" />
              High Priority
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-900/30 text-green-400 border border-green-800/50">
              <CheckCircle className="w-4 h-4 mr-1" />
              Submitted
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6 pt-6 border-t border-slate-700">
          <div>
            <span className="text-slate-400 font-medium">Submitted Date</span>
            <div className="text-slate-200 text-lg mt-1">August 31, 2025</div>
          </div>
          <div>
            <span className="text-slate-400 font-medium">Due Date</span>
            <div className="text-slate-200 text-lg mt-1">
              September 04, 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientRightRequirements;
