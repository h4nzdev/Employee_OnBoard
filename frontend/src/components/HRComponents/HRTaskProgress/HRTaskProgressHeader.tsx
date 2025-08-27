import { Download, Filter, Plus, Search } from "lucide-react";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import { useState } from "react";
const HRTaskProgressHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="px-6 py-4 border-b border-slate-800">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">
            Project Tasks
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Monitor task progress and manage project deliverables
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search tasks..."
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
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Task</span>
          </button>
        </div>
      </div>
      {isOpen && <AddTaskModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default HRTaskProgressHeader;
