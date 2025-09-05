import { Clock, DollarSign, MapPin, Users } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";
import { useContext } from "react";
import ApplicationContext from "../../../context/ApplicationContext";

const ClientJobOfferGrid = ({ job, setJobId, setIsOpen }: any) => {
  const { user } = useAuth();
  const { applications } = useContext(ApplicationContext);

  // Filter applications of the logged-in client
  const filterApplication = applications.filter(
    (a) => String(a.client) === String(user._id)
  );

  // Check if the client already applied to this job
  const applied = filterApplication.some(
    (a) => String(a.jobOffer?._id || a.jobOffer) === String(job._id)
  );

  return (
    <div
      key={job._id}
      className="bg-slate-900 rounded-xl border border-slate-800 p-6 hover:border-slate-700 transition-colors flex flex-col h-full"
    >
      <div className="flex flex-row items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-100 mb-1">
            {job.title}
          </h3>
          <p className="text-slate-400 text-sm mb-3">{job.category}</p>
        </div>
        <span className="px-2 py-1 bg-green-900 text-green-300 text-xs font-medium rounded-full">
          {job.status}
        </span>
      </div>

      <div className="flex flex-row items-center gap-4 mb-4 text-sm text-slate-300">
        <div className="flex items-center gap-1">
          <DollarSign className="w-4 h-4 text-slate-400" />
          <span>{job.salaryRange}k</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4 text-slate-400" />
          <span>{job.slots} slots</span>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4 mb-4 text-sm text-slate-300">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4 text-slate-400" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-slate-400" />
          <span>Full-time</span>
        </div>
      </div>

      <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
        {job.description}
      </p>

      <div className="mt-auto pt-2">
        <button
          onClick={() => {
            setJobId(job._id);
            setIsOpen(true);
          }}
          disabled={applied}
          className={`w-full px-4 py-2 ${
            applied
              ? "bg-slate-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white text-sm rounded-lg transition-colors`}
        >
          {applied ? "Already Applied" : "Apply now"}
        </button>
      </div>
    </div>
  );
};

export default ClientJobOfferGrid;
