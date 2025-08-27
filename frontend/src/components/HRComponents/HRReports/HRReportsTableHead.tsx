const HRReportsTableHead = () => {
  return (
    <thead>
      <tr className="border-b border-slate-800">
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Report
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Type
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Created On
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Status
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Size
        </th>
        <th className="text-right py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default HRReportsTableHead;
