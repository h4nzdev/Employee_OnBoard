"use client";

import {
  FileText,
  Calendar,
  Briefcase,
  CheckCircle,
  Clock,
  Send,
  MapPin,
  AlertCircle,
  PhilippinePeso,
  Upload,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useContext, useState, useEffect } from "react";
import JobOfferContext from "../../context/JobOfferContext";
import ApplicationContext from "../../context/ApplicationContext";
import axios from "axios";

export default function JobApplicantDashboard() {
  const { user } = useAuth();
  const { jobOffer } = useContext(JobOfferContext);
  const { applications } = useContext(ApplicationContext);
  const [interviews, setInterviews] = useState<any[]>([]);

  // Fetch interviews for this client
  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const res = await axios.get("http://localhost:3000/interviews");
        const allInterviews = res.data || [];
        // Filter interviews for this client
        const clientInterviews = allInterviews.filter(
          (interview: any) => String(interview.client?._id || interview.client) === String(user?._id)
        );
        setInterviews(clientInterviews);
      } catch (error) {
        console.error("Error fetching interviews:", error);
      }
    };
    fetchInterviews();
  }, [user?._id]);

  // Filter applications for this client
  const clientApplications = applications?.filter(
    (app) => String(app.client) === String(user?._id)
  ) || [];

  // Calculate statistics
  const totalApplications = clientApplications.length;
  const pendingApplications = clientApplications.filter(app => app.status === "Pending").length;
  const acceptedApplications = clientApplications.filter(app => app.status === "Accepted").length;
  const totalInterviews = interviews.length;
  const upcomingInterviews = interviews.filter(interview => {
    const interviewDate = new Date(interview.date);
    const today = new Date();
    return interviewDate >= today;
  }).length;

  // Calculate requirements statistics
  const totalRequirements = clientApplications.reduce((total, app) => {
    return total + (app.requirements?.length || 0);
  }, 0);

  const submittedRequirements = clientApplications.reduce((total, app) => {
    const submitted = app.requirements?.filter(req => req.status === "Submitted").length || 0;
    return total + submitted;
  }, 0);

  const pendingRequirements = clientApplications.reduce((total, app) => {
    const pending = app.requirements?.filter(req => req.status === "Pending").length || 0;
    return total + pending;
  }, 0);

  const requirementsProgress = totalRequirements > 0 ? Math.round((submittedRequirements / totalRequirements) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="flex-1 p-6 min-h-screen">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">
            Welcome Back, {user?.name || "User"}
          </h2>
          <p className="text-slate-400">
            Track your applications and explore new opportunities at TechCorp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* My Applications */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">My Applications</p>
                <p className="text-2xl font-bold text-slate-100">{totalApplications}</p>
                <p className="text-xs text-blue-400 mt-1">
                  {acceptedApplications} accepted
                </p>
              </div>
              <Send className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          {/* Pending Review */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Under Review</p>
                <p className="text-2xl font-bold text-slate-100">{pendingApplications}</p>
                <p className="text-xs text-amber-400 mt-1">Awaiting response</p>
              </div>
              <Clock className="w-8 h-8 text-amber-400" />
            </div>
          </div>

          {/* Upcoming Interviews */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Upcoming Interviews</p>
                <p className="text-2xl font-bold text-slate-100">{upcomingInterviews}</p>
                <p className="text-xs text-green-400 mt-1">
                  {totalInterviews} total scheduled
                </p>
              </div>
              <Calendar className="w-8 h-8 text-green-400" />
            </div>
          </div>

          {/* Requirements Progress */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Requirements Progress</p>
                <p className="text-2xl font-bold text-slate-100">{requirementsProgress}%</p>
                <p className="text-xs text-purple-400 mt-1">
                  {submittedRequirements}/{totalRequirements} submitted
                </p>
              </div>
              <Upload className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm mb-6">
          <div className="px-6 py-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <Briefcase className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-slate-100">
                Featured Job Openings
              </h3>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {jobOffer?.slice(0, 3).map((job) => (
                <div
                  key={job._id}
                  className="flex items-center justify-between p-4 bg-slate-800 rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="text-slate-100 font-medium">{job.title}</h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <p className="text-slate-400 text-sm flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </p>
                      <p className="text-slate-400 text-sm flex items-center">
                        <PhilippinePeso size={14} />
                        {job.salaryRange}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-900 text-green-300 text-xs font-medium rounded-full">
                    {job.status}
                  </span>
                </div>
              ))}
            </div>
            {jobOffer?.length > 3 && (
              <div className="text-center pt-4">
                <a 
                  href="/client/job-offer" 
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  View all {jobOffer.length} job openings →
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-semibold text-slate-100">
                My Requirements & Action Items
              </h3>
            </div>
          </div>

          <div className="p-6">
            {totalRequirements === 0 ? (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-400">No requirements assigned yet</p>
                <p className="text-sm text-slate-500 mt-1">
                  Requirements will appear here once your application is reviewed
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Requirements Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Total Requirements</p>
                        <p className="text-xl font-bold text-slate-100">{totalRequirements}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Submitted</p>
                        <p className="text-xl font-bold text-slate-100">{submittedRequirements}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Pending</p>
                        <p className="text-xl font-bold text-slate-100">{pendingRequirements}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Requirements */}
                <div className="space-y-3">
                  <h4 className="text-slate-200 font-medium mb-3">Recent Requirements</h4>
                  {clientApplications.flatMap(app => app.requirements || []).slice(0, 3).map((req: any, index: number) => (
                    <div key={req._id || index} className="flex items-start space-x-4 p-4 bg-slate-800 rounded-lg">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        req.status === "Submitted" ? "bg-green-600" : 
                        req.status === "In Progress" ? "bg-blue-600" : "bg-amber-600"
                      }`}>
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-slate-100 font-medium">{req.title}</h4>
                        <p className="text-slate-400 text-sm mt-1">{req.description || "No description provided"}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                            req.status === "Submitted" ? "bg-green-900 text-green-300" :
                            req.status === "In Progress" ? "bg-blue-900 text-blue-300" :
                            "bg-amber-900 text-amber-300"
                          }`}>
                            {req.status}
                          </span>
                          {req.dueDate && (
                            <span className="text-xs text-slate-500">
                              Due: {new Date(req.dueDate).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {totalRequirements > 3 && (
                  <div className="text-center pt-4">
                    <a 
                      href="/client/required-documents" 
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      View all {totalRequirements} requirements →
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}