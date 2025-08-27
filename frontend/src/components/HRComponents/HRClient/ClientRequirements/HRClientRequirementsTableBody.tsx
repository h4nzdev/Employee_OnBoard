import { MoreHorizontal } from "lucide-react";
import { requirements } from "../../../../data/requirements";
import {
  getStatusColor,
  getPriorityColor,
} from "../../../../utils/client_req_table";

const HRClientRequirementsTableBody = () => {
  return (
    <tbody className="divide-y divide-slate-800">
      {requirements.map((requirement) => (
        <tr
          key={requirement.id}
          className="hover:bg-slate-800/60 transition-colors"
        >
          <td className="py-4 px-6">
            <div>
              <div className="font-medium text-slate-100">
                {requirement.title}
              </div>
              <div className="text-sm text-slate-400 mt-1">
                {requirement.type}
              </div>
            </div>
          </td>
          <td className="py-4 px-6 text-sm text-slate-200">
            {requirement.client}
          </td>
          <td className="py-4 px-6">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                requirement.priority
              )}`}
            >
              {requirement.priority}
            </span>
          </td>
          <td className="py-4 px-6">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                requirement.status
              )}`}
            >
              {requirement.status}
            </span>
          </td>
          <td className="py-4 px-6 text-sm text-slate-400">
            {requirement.submittedDate || "Not submitted"}
          </td>
          <td className="py-4 px-6 text-sm text-slate-400">
            {requirement.dueDate}
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

export default HRClientRequirementsTableBody;
