import { MoreHorizontal } from "lucide-react";
import {
  getStatusColor,
  getPriorityColor,
} from "../../../../utils/client_req_table";
import { useContext, useEffect, useState } from "react";
import ClientContext from "../../../../context/ClientContext";
import type { Requirement } from "../../../../types/client";

const HRClientRequirementsTableBody = () => {
  const { client } = useContext(ClientContext);
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const approveClient = client.filter((c) => c.status === "Approve");

  useEffect(() => {
    const allRequirements = approveClient
      .filter((req) => req.requirements)
      .flatMap((req) => req.requirements);
    setRequirements(
      (allRequirements ?? []).filter((r): r is Requirement => r !== undefined)
    );
  }, [client]);

  return (
    <tbody className="divide-y divide-slate-800">
      {requirements.map((requirement) => (
        <tr
          key={requirement._id}
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
            {requirement.name}
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
            {requirement.submittedDate
              ? requirement.submittedDate.slice(0, 10)
              : "N/A"}
          </td>
          <td className="py-4 px-6 text-sm text-slate-400">
            {requirement.dueDate ? requirement.dueDate.slice(0, 10) : "N/A"}
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
