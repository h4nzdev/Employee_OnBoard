"use client";

import { MoreHorizontal } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ClientContext from "../../../../context/ClientContext";
import { getProgressColor } from "../../../../utils/employee_task_progress";
import { calculateRequirementProgress } from "../../../../utils/calculateProgress";

const HRClientRequirementsTableBody = () => {
  const { client } = useContext(ClientContext);
  const approveClient = client.filter((c) => c.status === "Approve");
  const navigate = useNavigate();

  return (
    <tbody className="divide-y divide-slate-800">
      {approveClient.map((c) => {
        const progress = calculateRequirementProgress(c.requirements ?? []);
        return (
          <tr
            key={c._id}
            onClick={() => navigate(`/client-requirements/${c._id}`)}
            className="hover:bg-slate-800/60 transition-colors"
          >
            <td className="py-4 px-6">
              <div className="font-medium text-slate-100">{c.name}</div>
            </td>
            <td className="py-4 px-6">
              <div className="flex items-center space-x-3">
                <div className="flex-1 bg-slate-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getProgressColor(progress)}`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span className="text-sm text-slate-300 min-w-[3rem]">
                  {progress}%
                </span>
              </div>
            </td>
            <td className="py-4 px-6">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-400 border border-green-800">
                {c.status}
              </span>
            </td>
            <td className="py-4 px-6 text-sm text-slate-200">
              {c.type || "New Registration"}
            </td>
            <td className="py-4 px-6 text-sm text-slate-200">
              {c.createdAt.slice(1, 10)}
            </td>
            <td className="py-4 px-6 text-right">
              <button className="text-slate-500 hover:text-slate-300 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default HRClientRequirementsTableBody;
