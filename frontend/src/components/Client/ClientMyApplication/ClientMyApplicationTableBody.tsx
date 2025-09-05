import { MoreHorizontal } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";
import { useContext } from "react";
import ApplicationContext from "../../../context/ApplicationContext";

const ClientMyApplicationTableBody = () => {
  const { user } = useAuth();
  const { applications } = useContext(ApplicationContext);

  // filter applications for logged-in client
  const filterApplications = applications.filter(
    (a) => String(a.client) === String(user._id)
  );

  console.log(filterApplications);

  return (
    <tbody className="divide-y divide-slate-800">
      {filterApplications.length > 0 ? (
        filterApplications.map((a) => (
          <tr key={a._id} className="hover:bg-slate-800">
            {/* Job Title (from jobOffer) */}
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-slate-100">
                {a.jobOffer?.title || "Unknown Job"}
              </div>
            </td>

            {/* Application type */}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
              {a.type || "Job Application"}
            </td>

            {/* Application status */}
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`px-2 py-1 ${
                  a.status === "Approve"
                    ? "bg-green-900 text-green-300"
                    : "bg-orange-900 text-orange-300"
                }  text-xs font-medium rounded-full`}
              >
                {a.status || "Pending"}
              </span>
            </td>

            {/* Job Category (from jobOffer) */}
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 py-1 bg-red-900 text-red-300 text-xs font-medium rounded-full">
                {a.jobOffer?.priority || "N/A"}
              </span>
            </td>

            {/* Application Date */}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
              {a.applicationDate ? a.applicationDate.split("T")[0] : "N/A"}
            </td>

            {/* Actions */}
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
              <button className="text-slate-500 hover:text-slate-300">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan={6}
            className="px-6 py-4 text-center text-slate-400 text-sm"
          >
            No applications found.
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default ClientMyApplicationTableBody;
