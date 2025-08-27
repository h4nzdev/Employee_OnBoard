const CategorySelect = ({ formData, setFormData }: any) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-400 mb-2">
        Category
      </label>
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
      >
        <option value="" disabled>Select Category</option>
        <option>Development</option>
        <option selected>Documentation</option>
        <option>Design</option>
      </select>
    </div>
  );
};

export default CategorySelect;
