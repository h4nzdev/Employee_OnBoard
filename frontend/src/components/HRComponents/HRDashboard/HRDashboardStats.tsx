import { CalendarX, Clock, UserPlus, Users } from "lucide-react";
import { useContext } from "react";
import EmployeeContext from "../../../context/EmployeeContext";

const HRDashboardStats = () => {
  const { employees } = useContext(EmployeeContext);

  const pendingLength: any = employees.filter(
    (employee) => employee.status === "Pending"
  ).length;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-400 mb-1">
              Total Employees
            </p>
            <p className="text-2xl font-bold text-slate-100">
              {employees?.length}
            </p>
            <p className="text-xs text-green-400 mt-1">↑ 12% from last month</p>
          </div>
          <div className="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-400 mb-1">New Hires</p>
            <p className="text-2xl font-bold text-slate-100">8</p>
            <p className="text-xs text-slate-400 mt-1">This month</p>
          </div>
          <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center">
            <UserPlus className="w-6 h-6 text-green-400" />
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-400 mb-1">
              Pending Reviews
            </p>
            <p className="text-2xl font-bold text-slate-100">{pendingLength}</p>
            <p className="text-xs text-amber-400 mt-1">Due this week</p>
          </div>
          <div className="w-12 h-12 bg-amber-900/30 rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6 text-amber-400" />
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-400 mb-1">
              Time Off Requests
            </p>
            <p className="text-2xl font-bold text-slate-100">5</p>
            <p className="text-xs text-red-400 mt-1">Needs approval</p>
          </div>
          <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center">
            <CalendarX className="w-6 h-6 text-red-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboardStats;
