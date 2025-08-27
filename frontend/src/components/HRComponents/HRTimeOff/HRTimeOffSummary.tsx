import { Calendar, CalendarCheck, CalendarX } from "lucide-react";
const HRTimeOffSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Pending Requests</p>
            <p className="text-2xl font-bold text-slate-100">8</p>
          </div>
          <div className="w-10 h-10 bg-amber-900/30 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-amber-400" />
          </div>
        </div>
      </div>
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Approved</p>
            <p className="text-2xl font-bold text-slate-100">24</p>
          </div>
          <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center">
            <CalendarCheck className="w-5 h-5 text-green-400" />
          </div>
        </div>
      </div>
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Rejected</p>
            <p className="text-2xl font-bold text-slate-100">3</p>
          </div>
          <div className="w-10 h-10 bg-red-900/30 rounded-lg flex items-center justify-center">
            <CalendarX className="w-5 h-5 text-red-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRTimeOffSummary;
