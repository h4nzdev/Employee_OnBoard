const AddRequirementsDueSubmittedDate = ({ formData, setFormData }: any) => {
  return (
    <>
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

      {/* Submitted Date */}
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Submitted Date
        </label>
        <input
          type="date"
          value={formData.submittedDate}
          onChange={(e) =>
            setFormData({ ...formData, submittedDate: e.target.value })
          }
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
        />
      </div>
    </>
  );
};

export default AddRequirementsDueSubmittedDate;
