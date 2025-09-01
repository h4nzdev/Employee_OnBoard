import { MoreHorizontal } from "lucide-react";
import { getPriorityColor, getStatusColor } from "../../utils/client_req_table";

const ClientRequiredDocument = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="">
        <h2 className="text-2xl font-bold text-slate-100 mb-6">
          Client Requirements Table
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-slate-900 rounded-lg overflow-hidden">
            <thead className="bg-slate-800">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-medium text-slate-300">
                  Requirement
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-slate-300">
                  Priority
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-slate-300">
                  Status
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-slate-300">
                  Submitted Date
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-slate-300">
                  Due Date
                </th>
                <th className="py-4 px-6 text-right text-sm font-medium text-slate-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              <tr className="hover:bg-slate-800/60 transition-colors">
                <td className="py-4 px-6">
                  <div>
                    <div className="font-medium text-slate-100">
                      API Integration Requirements
                    </div>
                    <div className="text-sm text-slate-400 mt-1">Technical</div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                      "High"
                    )}`}
                  >
                    High
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      "In Progress"
                    )}`}
                  >
                    In Progress
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-slate-400">2024-01-15</td>
                <td className="py-4 px-6 text-sm text-slate-400">2024-02-15</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-slate-500 hover:text-slate-300 transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-800/60 transition-colors">
                <td className="py-4 px-6">
                  <div>
                    <div className="font-medium text-slate-100">
                      User Authentication System
                    </div>
                    <div className="text-sm text-slate-400 mt-1">Security</div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                      "Medium"
                    )}`}
                  >
                    Medium
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      "Completed"
                    )}`}
                  >
                    Completed
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-slate-400">2024-01-10</td>
                <td className="py-4 px-6 text-sm text-slate-400">2024-01-30</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-slate-500 hover:text-slate-300 transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-800/60 transition-colors">
                <td className="py-4 px-6">
                  <div>
                    <div className="font-medium text-slate-100">
                      Database Migration Script
                    </div>
                    <div className="text-sm text-slate-400 mt-1">Database</div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                      "Low"
                    )}`}
                  >
                    Low
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      "Pending"
                    )}`}
                  >
                    Pending
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-slate-400">2024-01-20</td>
                <td className="py-4 px-6 text-sm text-slate-400">2024-03-01</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-slate-500 hover:text-slate-300 transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-800/60 transition-colors">
                <td className="py-4 px-6">
                  <div>
                    <div className="font-medium text-slate-100">
                      Mobile App Compatibility
                    </div>
                    <div className="text-sm text-slate-400 mt-1">Frontend</div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                      "High"
                    )}`}
                  >
                    High
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      "Overdue"
                    )}`}
                  >
                    Overdue
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-slate-400">2023-12-15</td>
                <td className="py-4 px-6 text-sm text-slate-400">2024-01-15</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-slate-500 hover:text-slate-300 transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientRequiredDocument;
