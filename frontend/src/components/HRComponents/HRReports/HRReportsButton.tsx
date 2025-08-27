import reports from "../../../data/reports";

const HRReportsButton = () => {
  return (
    <div className="flex items-center justify-between text-sm text-slate-400">
      <span>Showing 1 to {reports.length} of 48 results</span>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 border border-slate-700 rounded text-slate-300 hover:bg-slate-800 transition-colors">
          Previous
        </button>
        <button className="px-3 py-1 border border-slate-700 rounded text-slate-300 hover:bg-slate-800 transition-colors">
          Next
        </button>
      </div>
    </div>
  );
};

export default HRReportsButton;
