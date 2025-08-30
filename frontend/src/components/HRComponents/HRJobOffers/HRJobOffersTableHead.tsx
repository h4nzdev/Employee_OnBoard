const HRJobOffersTableHead = () => {
  return (
    <thead className="bg-slate-800">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
          Title
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
          Slots
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
          Status
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
          Location
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
          Posted Date
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
          Deadline
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
          Priority
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default HRJobOffersTableHead;
