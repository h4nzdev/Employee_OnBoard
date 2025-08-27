import { Download, Filter, Plus, Search } from "lucide-react";

const HRClientRequirementsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-slate-100">
          Document Requirements
        </h3>
        <p className="text-sm text-slate-400 mt-1">
          Manage client document submissions and track their status
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search documents..."
              className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors flex items-center space-x-2 border border-slate-700 rounded-lg">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
        <button className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Document</span>
        </button>
      </div>
    </div>
  );
};

export default HRClientRequirementsHeader;
