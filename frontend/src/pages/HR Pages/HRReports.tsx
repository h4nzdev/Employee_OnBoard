import { Download, FileText } from "lucide-react";
import HRReportFilter from "../../components/HRComponents/HRReports/HRReportFilter";
import HRReportsTableHead from "../../components/HRComponents/HRReports/HRReportsTableHead";
import HRReportsTableBody from "../../components/HRComponents/HRReports/HRReportsTableBody";
import HRReportsButton from "../../components/HRComponents/HRReports/HRReportsButton";

const HRReports = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-100">Reports</h2>
            <p className="text-slate-400 mt-2">
              Generate and manage HR reports.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export All</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>New Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <HRReportFilter />

      {/* Reports Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <HRReportsTableHead />
            <HRReportsTableBody />
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-800">
          <HRReportsButton />
        </div>
      </div>
    </div>
  );
};

export default HRReports;
