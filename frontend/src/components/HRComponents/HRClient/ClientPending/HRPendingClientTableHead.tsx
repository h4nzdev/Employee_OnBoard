const HRPendingClientTableHead = () => {
  return (
    <thead className="border-b border-slate-800">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
          Client
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
          Type
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
          Status
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
          Priority
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
          Submitted
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default HRPendingClientTableHead;
