import { Filter, Search } from "lucide-react";

const HRReportFilter = () => {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm mb-6">
      <div className="px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search reports..."
                className="w-full pl-10 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <select className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200">
            <option>All Types</option>
            <option>Workforce</option>
            <option>Recruiting</option>
            <option>Attendance</option>
            <option>Performance</option>
          </select>
        </div>
      </div>
      <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 text-xs text-slate-400 flex items-center space-x-2">
        <Filter className="w-4 h-4" />
        <span>Filters are static for now</span>
      </div>
    </div>
  );
};

export default HRReportFilter;
