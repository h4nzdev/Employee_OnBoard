const HRClientRequirementsTableHead = () => {
  return (
    <thead>
      <tr className="border-b border-slate-800">
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Document
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Client
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Priority
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Status
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Submitted
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Due Date
        </th>
        <th className="text-right py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default HRClientRequirementsTableHead;
