const HRTaskProgressTableHead = () => {
  return (
    <thead>
      <tr className="border-b border-slate-800">
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Task
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Assignee
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Priority
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Status
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Progress
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

export default HRTaskProgressTableHead;
