const AddRequirementsDescription = ({ formData, setFormData }: any) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-400 mb-2">
        Description
      </label>
      <textarea
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="Enter description or instructions"
        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 resize-none"
      ></textarea>
    </div>
  );
};

export default AddRequirementsDescription;
