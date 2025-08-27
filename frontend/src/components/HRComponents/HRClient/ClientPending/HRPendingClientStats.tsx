import { AlertCircle, Clock, FileText, User } from "lucide-react";

const HRPendingClientStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Total Pending</p>
            <p className="text-2xl font-bold text-slate-100">15</p>
          </div>
          <Clock className="w-8 h-8 text-yellow-400" />
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Documents Review</p>
            <p className="text-2xl font-bold text-slate-100">8</p>
          </div>
          <FileText className="w-8 h-8 text-blue-400" />
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Urgent</p>
            <p className="text-2xl font-bold text-slate-100">3</p>
          </div>
          <AlertCircle className="w-8 h-8 text-red-400" />
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">This Week</p>
            <p className="text-2xl font-bold text-slate-100">12</p>
          </div>
          <User className="w-8 h-8 text-green-400" />
        </div>
      </div>
    </div>
  );
};

export default HRPendingClientStats;
