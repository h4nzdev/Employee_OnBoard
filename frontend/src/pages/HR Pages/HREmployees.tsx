import {
  Search,
  Filter,
  Plus,
  Download,
  MoreHorizontal,
  Users,
} from "lucide-react";
import { employees } from "../../data/employees";
import HREmplooyesFilter from "../../components/HRComponents/HREmplooyes/HREmplooyesFilter";
import HREmployeesSummary from "../../components/HRComponents/HREmplooyes/HREmployeesSummary";
import HREmployeesTableHead from "../../components/HRComponents/HREmplooyes/HREmployeesTableHead";
import HREmployeesTableBody from "../../components/HRComponents/HREmplooyes/HREmployeesTableBody";
import TableActionButton from "../../components/TableActionButton";

const HREmployees = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-100">Employees</h2>
            <p className="text-slate-400 mt-2">
              View and manage your organization's employee directory.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Employee</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <HREmplooyesFilter />

      {/* Summary */}
      <HREmployeesSummary />

      {/* Employees Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <HREmployeesTableHead />
            <HREmployeesTableBody />
          </table>
        </div>
        <TableActionButton />
      </div>
    </div>
  );
};

export default HREmployees;
