const AddRequirementName = ({
  clientId,
  handleClientChange,
  approveClient,
}: any) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-400 mb-2">
        Name
      </label>
      <select
        value={clientId ?? ""}
        onChange={(e) => handleClientChange(e.target.value)}
        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
      >
        <option value="">Select Name</option>
        {approveClient.map((c: any) => (
          <option key={c._id} value={c._id}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddRequirementName;
