const DatePickers = ({ formData, setFormData }: any) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Start Date
        </label>
        <input
          type="date"
          value={formData.startDate}
          onChange={(e) =>
            setFormData({ ...formData, startDate: e.target.value })
          }
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Due Date
        </label>
        <input
          type="date"
          value={formData.dueDate}
          onChange={(e) =>
            setFormData({ ...formData, dueDate: e.target.value })
          }
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
        />
      </div>
    </div>
  );
};

export default DatePickers;
