import { Download, Plus } from "lucide-react";

const HRDashboardHeader = () => {
  return (
    <div className="px-6 py-4 border-b border-slate-800">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">
            Recent Employees
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Manage your team members and their account permissions
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Employee</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HRDashboardHeader;
