import { Users } from "lucide-react";
import { useContext } from "react";
import EmployeeContext from "../../../context/EmployeeContext";

const HREmployeesSummary = () => {
  const { employees } = useContext(EmployeeContext);
  const activeLen = employees.filter((e) => e.status === "Active").length;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Total Employees</p>
          <p className="text-2xl font-bold text-slate-100">
            {employees.length}
          </p>
        </div>
        <div className="w-10 h-10 bg-blue-900/40 rounded-lg flex items-center justify-center">
          <Users className="w-5 h-5 text-blue-400" />
        </div>
      </div>
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Active</p>
          <p className="text-2xl font-bold text-slate-100">{activeLen}</p>
        </div>
        <div className="w-10 h-10 bg-blue-900/40 rounded-lg flex items-center justify-center">
          <Users className="w-5 h-5 text-blue-400" />
        </div>
      </div>
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">On Leave</p>
          <p className="text-2xl font-bold text-slate-100">11</p>
        </div>
        <div className="w-10 h-10 bg-blue-900/40 rounded-lg flex items-center justify-center">
          <Users className="w-5 h-5 text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default HREmployeesSummary;
