const DescriptionInput = ({ formData, setFormData }: any) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-400 mb-2">
        Description
      </label>
      <textarea
        value={formData.description}
        placeholder="Enter your project message or instruction..."
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 resize-none"
      ></textarea>
    </div>
  );
};

export default DescriptionInput;
