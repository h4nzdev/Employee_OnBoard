import React from "react";

const HRTimeOffTableHead = () => {
  return (
    <thead>
      <tr className="border-b border-slate-800">
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Employee
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Type
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Start
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          End
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Days
        </th>
        <th className="text-left py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Status
        </th>
        <th className="text-right py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default HRTimeOffTableHead;
