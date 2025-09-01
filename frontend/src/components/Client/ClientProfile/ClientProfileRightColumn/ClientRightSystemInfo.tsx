const ClientRightSystemInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-100 mb-6">
        System Information
      </h2>
      <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <span className="text-slate-400 font-medium">Created</span>
            <div className="text-slate-200 mt-1">
              August 31, 2025 • 01:20:32
            </div>
          </div>
          <div>
            <span className="text-slate-400 font-medium">Last Updated</span>
            <div className="text-slate-200 mt-1">
              August 31, 2025 • 01:59:31
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientRightSystemInfo;
