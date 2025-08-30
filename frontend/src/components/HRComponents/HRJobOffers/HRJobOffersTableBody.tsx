import { Users } from "lucide-react";
import { useContext } from "react";
import JobOfferContext from "../../../context/JobOfferContext";
import {
  getPriorityColor,
  getStatusColor,
} from "../../../utils/jobOffer_table";

const HRJobOffersTableBody = () => {
  const { jobOffer } = useContext(JobOfferContext);
  return (
    <tbody className="divide-y divide-slate-800">
      {jobOffer.map((job) => (
        <tr className="hover:bg-slate-800">
          <td className="px-6 py-4 whitespace-nowrap">
            <div>
              <div className="text-sm font-medium text-slate-100">
                {job.title}
              </div>
              <div className="text-sm text-slate-400">{job.category}</div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <Users className="w-4 h-4 text-slate-400 mr-2" />
              <span className="text-sm text-slate-300">
                {job.slots} positions
              </span>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                job.status
              )}`}
            >
              {job.status}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="text-sm text-slate-300">{job.location}</span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="text-sm text-slate-300">
              {job.postedDate.slice(1, 10)}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="text-sm text-red-300">
              {job.deadline.slice(0, 10)}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(
                job.priority
              )}`}
            >
              {job.priority}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex space-x-2">
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                View
              </button>
              <button className="text-slate-400 hover:text-slate-300 text-sm">
                Edit
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default HRJobOffersTableBody;
