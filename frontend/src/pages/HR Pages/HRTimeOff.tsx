import { Calendar, Download, MoreHorizontal } from "lucide-react";
import { requests } from "../../data/requests";
import HRTimeOffFilter from "../../components/HRComponents/HRTimeOff/HRTimeOffFilter";
import HRTimeOffSummary from "../../components/HRComponents/HRTimeOff/HRTimeOffSummary";
import HRTimeOffTableHead from "../../components/HRComponents/HRTimeOff/HRTimeOffTableHead";
import HRTimeOffTableBody from "../../components/HRComponents/HRTimeOff/HRTimeOffTableBody";
import TableActionButton from "../../components/TableActionButton";
const HRTimeOff = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-100">Time Off</h2>
            <p className="text-slate-400 mt-2">
              Review and manage time off requests.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>New Request</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <HRTimeOffFilter />
      {/* Summary */}
      <HRTimeOffSummary />
      {/* Requests Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <HRTimeOffTableHead />
            <HRTimeOffTableBody />
          </table>
        </div>
        <TableActionButton />
      </div>
    </div>
  );
};

export default HRTimeOff;
