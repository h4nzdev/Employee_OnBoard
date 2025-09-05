import { CheckCircle, XCircle } from "lucide-react";
import { useContext } from "react";
import axios from "axios";
import ApplicationContext from "../../../../context/ApplicationContext";

const HRPendingApplicationTableBody = () => {
  const { applications, fetchApplications }: any =
    useContext(ApplicationContext);

  // filter applications that are "Pending"
  const pendingApplications = applications.filter(
    (app: any) => app.status === "Pending"
  );

  const handleSubmit = async (id: string, newStatus: string) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/application/update/${id}`,
        { status: newStatus }
      );
      console.log(res.data);
      fetchApplications();
      alert(`Application ${newStatus === "Approve" ? "Approved" : "Rejected"}`);
    } catch (error) {
      console.error("Server error", error);
    }
  };

  return (
    <tbody className="divide-y divide-slate-800">
      {pendingApplications.length === 0 ? (
        <tr>
          <td
            colSpan={6}
            className="px-6 py-4 whitespace-nowrap text-xl text-center"
          >
            No applications found
          </td>
        </tr>
      ) : (
        <>
          {pendingApplications.map((application: any) => (
            <tr key={application._id} className="hover:bg-slate-800">
              {/* Avatar + Name + Email */}
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">
                      {application.name?.charAt(0).toUpperCase() || "A"}
                    </span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-slate-100">
                      {application.name}
                    </div>
                    <div className="text-sm text-slate-400">
                      {application.email}
                    </div>
                  </div>
                </div>
              </td>

              {/* Type */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                {application.type || "New Application"}
              </td>

              {/* Status */}
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 bg-yellow-900 text-yellow-300 text-xs font-medium rounded-full">
                  {application.status}
                </span>
              </td>

              {/* Priority (example static value, replace if backend provides) */}
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 bg-red-900 text-red-300 text-xs font-medium rounded-full">
                  High
                </span>
              </td>

              {/* Created Date */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                {application.createdAt
                  ? application.createdAt.slice(0, 10)
                  : "N/A"}
              </td>

              {/* Action Buttons */}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                <button
                  type="button"
                  className="text-green-400 hover:text-green-300"
                  onClick={() => handleSubmit(application._id, "Approve")}
                >
                  <CheckCircle className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="text-red-400 hover:text-red-300"
                  onClick={() => handleSubmit(application._id, "Reject")}
                >
                  <XCircle className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </>
      )}
    </tbody>
  );
};

export default HRPendingApplicationTableBody;
