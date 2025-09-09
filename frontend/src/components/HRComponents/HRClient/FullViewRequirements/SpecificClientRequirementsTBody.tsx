import {
  getPriorityColor,
  getStatusColor,
} from "../../../../utils/client_req_table";
import { MoreHorizontal, Eye } from "lucide-react";

interface SpecificClientRequirementsTBodyProps {
  requirement: any;
  onViewRequirement: (requirement: any) => void;
}

const SpecificClientRequirementsTBody = ({
  requirement,
  onViewRequirement,
}: SpecificClientRequirementsTBodyProps) => {
  return (
    <tr
      key={requirement._id}
      className="hover:bg-slate-800/60 transition-colors"
    >
      <td className="py-4 px-6">
        <div>
          <div className="font-medium text-slate-100">{requirement.title}</div>
          <div className="text-sm text-slate-400 mt-1">{requirement.type}</div>
        </div>
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
        {requirement?.submittedDate?.slice(1, 10) || "In process"}
      </td>
      <td className="py-4 px-6 text-sm text-slate-400">
        {requirement?.dueDate?.slice(1, 10) || "N/A"}
      </td>
      <td className="py-4 px-6 text-right">
        <div className="flex justify-end">
          <button
            onClick={() => onViewRequirement(requirement)}
            disabled={requirement.status !== "Submitted"}
            className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm transition-colors ${
              requirement.status === "Submitted"
                ? "text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
                : "text-slate-500 cursor-not-allowed"
            }`}
            title={
              requirement.status === "Submitted"
                ? "View submitted file"
                : "File not submitted yet"
            }
          >
            <Eye className="w-4 h-4" />
            View
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SpecificClientRequirementsTBody;