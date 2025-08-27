const ProgressSlider = ({ formData, setFormData }: any) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-400 mb-2">
        Progress ({formData.progress})
      </label>
      <input
        type="range"
        min="0"
        max="100"
        value={formData.progress}
        onChange={(e) =>
          setFormData({ ...formData, progress: Number(e.target.value) })
        }
        className="w-full"
      />
    </div>
  );
};

export default ProgressSlider;
