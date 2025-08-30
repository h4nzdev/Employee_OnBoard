const AddRequirementsType = ({ formData, setFormData }: any) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-400 mb-2">
        Type
      </label>
      <select
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
      >
        <option value="">Select Type</option>
        <option value="Document Verification">Document Verification</option>
        <option value="Health Verification">Health Verification</option>
        <option value="Background Check">Background Check</option>
        <option value="Training Completion">Training Completion</option>
      </select>
    </div>
  );
};

export default AddRequirementsType;
