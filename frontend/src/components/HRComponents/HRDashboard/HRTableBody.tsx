import { MoreHorizontal } from "lucide-react";
import { useContext } from "react";
import ApplicationContext from "../../../context/ApplicationContext";

const HRTableBody = () => {
  const { applications } = useContext(ApplicationContext);
  return (
    <tbody className="divide-y divide-slate-800">
      {applications.map((application) => (
        <tr
          key={application._id}
          className="hover:bg-slate-800/60 transition-colors"
        >
          <td className="py-4 px-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {application.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <div className="font-medium text-slate-100">
                  {application.name}
                </div>
                <div className="text-sm text-slate-400">
                  {application.email}
                </div>
              </div>
            </div>
          </td>
          <td className="py-4 px-6 text-sm text-slate-200">
            {application.jobOffer.title}
          </td>
          <td className="py-4 px-6 text-sm text-slate-400">
            {application?.type || "N/A"}
          </td>
          <td className="py-4 px-6">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                application.status === "Approve"
                  ? "bg-green-900/30 text-green-300 border border-green-900"
                  : application.status === "Pending"
                  ? "bg-yellow-900/30 text-yellow-300 border border-yellow-900"
                  : "bg-slate-800 text-slate-300 border border-slate-700"
              }`}
            >
              {application.status}
            </span>
          </td>
          <td className="py-4 px-6 text-sm text-slate-400">
            {application.createdAt.slice(0, 10)}
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

export default HRTableBody;
