
const HRTableHeader = () => {
  return (
    <thead>
      <tr className="border-b border-slate-800">
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Employee
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Role
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Department
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Status
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Join Date
        </th>
        <th className="text-right py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default HRTableHeader;
