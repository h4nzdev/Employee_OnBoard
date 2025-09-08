import { MoreHorizontal } from "lucide-react";
import { useContext } from "react";
import { getPriorityColor, getStatusColor } from "../../utils/client_req_table";
import ApplicationContext from "../../context/ApplicationContext";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const ClientRequiredDocument = () => {
  const { user } = useAuth();
  const { applications } = useContext(ApplicationContext);

  // 1️⃣ Filter applications for the logged-in client
  const clientApplications = applications.filter(
    (app) => String(app.client) === String(user._id)
  );

  // 2️⃣ Flatten all requirements from all applications
  const clientRequirements = clientApplications.flatMap(
    (app) => app.requirements || []
  );

  return (
    <div className="bg-slate-900 min-h-screen p-6">
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
            {clientRequirements.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-4 text-center text-slate-400 text-sm"
                >
                  No requirements found.
                </td>
              </tr>
            ) : (
              clientRequirements.map((req) => (
                <tr
                  key={req._id}
                  className="hover:bg-slate-800/60 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-slate-100">
                        {req.title}
                      </div>
                      <div className="text-sm text-slate-400 mt-1">
                        {req.type}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                        req.priority
                      )}`}
                    >
                      {req.priority}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        req.status
                      )}`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-400">
                    {req.submittedDate
                      ? req.submittedDate.split("T")[0]
                      : "N/A"}
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-400">
                    {req.dueDate ? req.dueDate.split("T")[0] : "N/A"}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Link to={`/client/submit-requirement/${req._id}`}>
                      <button
                        disabled={req.status === "Submitted"}
                        className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-500"
                      >
                        Submit File
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientRequiredDocument;
