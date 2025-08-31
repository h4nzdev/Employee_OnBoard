import { Clock, DollarSign, MapPin, Users } from "lucide-react";

const ClientJobOfferGrid = ({ job, setJobId, setIsOpen }: any) => {
  return (
    <div
      key={job._id}
      className="bg-slate-900 rounded-xl border border-slate-800 p-6 hover:border-slate-700 transition-colors"
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

      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
        {job.description}
      </p>

      <button
        onClick={() => {
          setJobId(job._id);
          setIsOpen(true);
        }}
        className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
      >
        Apply Now
      </button>
    </div>
  );
};

export default ClientJobOfferGrid;
