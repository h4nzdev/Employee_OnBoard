import { Calendar, Clock, FileText, CheckCircle } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

import ApplicationContext from "../../../context/ApplicationContext";

const HRDashboardStats = () => {
  const { applications } = useContext(ApplicationContext);
  const [interviews, setInterviews] = useState<any[]>([]);

  // Fetch interviews data
  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const res = await axios.get("http://localhost:3000/interviews");
        setInterviews(res.data || []);
      } catch (error) {
        console.error("Error fetching interviews:", error);
      }
    };
    fetchInterviews();
  }, []);

  // Calculate statistics
  const totalApplications = applications?.length || 0;
  const approvedApplications = applications?.filter(app => app.status === "Accepted").length || 0;
  const pendingApplications = applications?.filter(app => app.status === "Pending").length || 0;
  const totalInterviews = interviews?.length || 0;
  const upcomingInterviews = interviews?.filter(interview => {
    const interviewDate = new Date(interview.date);
    const today = new Date();
    return interviewDate >= today;
  }).length || 0;

  // Calculate requirements statistics
  const totalRequirements = applications?.reduce((total, app) => {
    return total + (app.requirements?.length || 0);
  }, 0) || 0;

  const submittedRequirements = applications?.reduce((total, app) => {
    const submitted = app.requirements?.filter(req => req.status === "Submitted").length || 0;
    return total + submitted;
  }, 0) || 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {/* Total Applications */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-400 mb-1">
              Total Applications
            </p>
            <p className="text-2xl font-bold text-slate-100">
              {totalApplications}
            </p>
            <p className="text-xs text-blue-400 mt-1">
              {approvedApplications} approved
            </p>
          </div>
          <div className="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </div>

      {/* Pending Applications */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-400 mb-1">Pending Review</p>
            <p className="text-2xl font-bold text-slate-100">{pendingApplications}</p>
            <p className="text-xs text-amber-400 mt-1">Needs attention</p>
          </div>
          <div className="w-12 h-12 bg-amber-900/30 rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6 text-amber-400" />
          </div>
        </div>
      </div>

      {/* Upcoming Interviews */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-400 mb-1">
              Upcoming Interviews
            </p>
            <p className="text-2xl font-bold text-slate-100">{upcomingInterviews}</p>
            <p className="text-xs text-green-400 mt-1">
              {totalInterviews} total scheduled
            </p>
          </div>
          <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center">
            <Calendar className="w-6 h-6 text-green-400" />
          </div>
        </div>
      </div>

      {/* Requirements Progress */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-400 mb-1">
              Requirements Progress
            </p>
            <p className="text-2xl font-bold text-slate-100">
              {totalRequirements > 0 ? Math.round((submittedRequirements / totalRequirements) * 100) : 0}%
            </p>
            <p className="text-xs text-slate-400 mt-1">
              {submittedRequirements}/{totalRequirements} submitted
            </p>
          </div>
          <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboardStats;