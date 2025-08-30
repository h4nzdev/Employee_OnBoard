import { Briefcase, Clock, Star, Users } from "lucide-react";
import { useContext } from "react";
import JobOfferContext from "../../../context/JobOfferContext";

const HRJobOffersStats = () => {
  const {jobOffer} = useContext(JobOfferContext)
  const openSlot = jobOffer.filter((j) => j.status === "Open").length
  const urgent = jobOffer.filter((j) => j.priority === "High").length
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Total Jobs</p>
            <p className="text-2xl font-bold text-slate-100">{jobOffer.length}</p>
          </div>
          <Briefcase className="w-8 h-8 text-blue-400" />
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Open Slots</p>
            <p className="text-2xl font-bold text-slate-100">{openSlot}</p>
          </div>
          <Users className="w-8 h-8 text-green-400" />
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Recommended</p>
            <p className="text-2xl font-bold text-slate-100">8</p>
          </div>
          <Star className="w-8 h-8 text-yellow-400" />
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Urgent</p>
            <p className="text-2xl font-bold text-slate-100">{urgent}</p>
          </div>
          <Clock className="w-8 h-8 text-red-400" />
        </div>
      </div>
    </div>
  );
};

export default HRJobOffersStats;
