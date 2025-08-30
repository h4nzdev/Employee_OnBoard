const AddRequirementsTitle = ({ formData, setFormData }: any) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-400 mb-2">
        Title
      </label>
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Enter document title e.g(ID, NSO, Clearance ...etc)"
        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
      />
    </div>
  );
};

export default AddRequirementsTitle;
