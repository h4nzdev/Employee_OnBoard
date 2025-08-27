const HRDashboardTableButton = () => {
  return (
    <div className="flex items-center justify-between text-sm text-slate-500">
      <span>Showing 1 to 6 of 247 results</span>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 border border-slate-600 rounded text-slate-200 hover:bg-slate-50 transition-colors">
          Previous
        </button>
        <button className="px-3 py-1 border border-slate-600 rounded text-slate-200 hover:bg-slate-50 transition-colors">
          Next
        </button>
      </div>
    </div>
  );
};

export default HRDashboardTableButton;
