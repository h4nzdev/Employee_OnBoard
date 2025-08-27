const TableActionButton = () => {
  return (
    <div className="px-6 py-4 border-t border-slate-800">
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>Showing 1 to 6 of 24 results</span>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-slate-600 rounded text-slate-200 hover:bg-slate-800 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1 border border-slate-600 rounded text-slate-200 hover:bg-slate-800 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableActionButton;
