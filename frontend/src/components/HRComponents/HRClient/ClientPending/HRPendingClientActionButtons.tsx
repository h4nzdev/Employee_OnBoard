const HRPendingClientActionButtons = () => {
  return (
    <div className="px-6 py-4 border-b border-slate-800">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-100">
          Pending Clients
        </h3>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
            Approve All
          </button>
          <button className="px-4 py-2 bg-slate-700 text-slate-300 text-sm rounded-lg hover:bg-slate-600">
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default HRPendingClientActionButtons;
