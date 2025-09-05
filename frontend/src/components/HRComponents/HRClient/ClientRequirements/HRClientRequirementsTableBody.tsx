"use client";

import { MoreHorizontal } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getProgressColor } from "../../../../utils/employee_task_progress";
import { calculateRequirementProgress } from "../../../../utils/calculateProgress";
import ApplicationContext from "../../../../context/ApplicationContext";

const HRClientRequirementsTableBody = () => {
  const { applications }: any = useContext(ApplicationContext);
  const navigate = useNavigate();

  // filter only approved applications
  const approvedApplications = applications.filter(
    (app: any) => app.status === "Approve"
  );

  return (
    <tbody className="divide-y divide-slate-800">
      {approvedApplications.map((app: any) => {
        const progress = calculateRequirementProgress(app.requirements ?? []);
        return (
          <tr
            key={app._id}
            onClick={() => navigate(`/application-requirements/${app._id}`)}
            className="hover:bg-slate-800/60 transition-colors"
          >
            {/* Applicant Name */}
            <td className="py-4 px-6">
              <div className="font-medium text-slate-100">{app.name}</div>
            </td>

            {/* Progress bar */}
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

            {/* Status */}
            <td className="py-4 px-6">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-400 border border-green-800">
                {app.status}
              </span>
            </td>

            {/* Type */}
            <td className="py-4 px-6 text-sm text-slate-200">
              {app.type || "New Application"}
            </td>

            {/* Created At */}
            <td className="py-4 px-6 text-sm text-slate-200">
              {app.createdAt ? app.createdAt.slice(0, 10) : "N/A"}
            </td>

            {/* Options Button */}
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
