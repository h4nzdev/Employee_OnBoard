const AssigneeSelect = ({
  employeeId,
  handleEmployeeChange,
  employees,
}: any) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-400 mb-2">
        Assignee
      </label>
      <select
        value={employeeId ?? ""}
        onChange={handleEmployeeChange}
        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
      >
        <option value="" disabled>Select an Employee</option>
        {employees.map((employee: any) => (
          <option key={employee._id} value={employee._id}>
            {employee.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AssigneeSelect;
