import { MoreHorizontal } from "lucide-react";
import { useContext } from "react";
import EmployeeContext from "../../../context/EmployeeContext";

const HREmployeesTableBody = () => {
  const { employees } = useContext(EmployeeContext);
  return (
    <tbody className="divide-y divide-slate-800">
      {employees.map((employee) => (
        <tr
          key={employee.id}
          className="hover:bg-slate-800/60 transition-colors"
        >
          <td className="py-4 px-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {employee.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <div className="font-medium text-slate-100">
                  {employee.name}
                </div>
                <div className="text-sm text-slate-400">{employee.email}</div>
              </div>
            </div>
          </td>
          <td className="py-4 px-6 text-sm text-slate-200">{employee.role}</td>
          <td className="py-4 px-6 text-sm text-slate-400">
            {employee.department}
          </td>
          <td className="py-4 px-6">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                employee.status === "Active"
                  ? "bg-green-900/30 text-green-300 border border-green-900"
                  : employee.status === "Pending"
                  ? "bg-yellow-900/30 text-yellow-300 border border-yellow-900"
                  : "bg-slate-800 text-slate-300 border border-slate-700"
              }`}
            >
              {employee.status}
            </span>
          </td>
          <td className="py-4 px-6 text-sm text-slate-400">
            {employee.createdAt.slice(0, 10)}
          </td>
          <td className="py-4 px-6 text-right">
            <button className="text-slate-500 hover:text-slate-300 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default HREmployeesTableBody;
