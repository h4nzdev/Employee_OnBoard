"use client";

import {
  FileText,
  Calendar,
  Briefcase,
  CheckCircle,
  Clock,
  Building2,
  Send,
  MapPin,
  GraduationCap,
  AlertCircle,
  PhilippinePeso,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useContext } from "react";
import JobOfferContext from "../../context/JobOfferContext";

export default function JobApplicantDashboard() {
  const { user } = useAuth();
  const { jobOffer } = useContext(JobOfferContext);
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="flex-1 p-6 min-h-screen">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">
            Welcome Back, {user.name}
          </h2>
          <p className="text-slate-400">
            Track your applications and explore new opportunities at TechCorp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Applications Sent</p>
                <p className="text-2xl font-bold text-slate-100">5</p>
              </div>
              <Send className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Under Review</p>
                <p className="text-2xl font-bold text-slate-100">3</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-400" />
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Interviews Scheduled</p>
                <p className="text-2xl font-bold text-slate-100">2</p>
              </div>
              <Calendar className="w-8 h-8 text-green-400" />
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Open Positions</p>
                <p className="text-2xl font-bold text-slate-100">12</p>
              </div>
              <Briefcase className="w-8 h-8 text-purple-400" />
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
              {jobOffer.map((job) => (
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
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-semibold text-slate-100">
                HR Requirements & Action Items
              </h3>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-slate-800 rounded-lg">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-slate-100 font-medium">
                    Background Check Documents Required
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Please upload your background check authorization form and
                    government-issued ID
                  </p>
                  <span className="inline-block mt-2 px-2 py-1 bg-red-900 text-red-300 text-xs font-medium rounded">
                    Due: 3 days
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-slate-800 rounded-lg">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-slate-100 font-medium">
                    Education Verification Pending
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    We need official transcripts from your university to verify
                    your degree
                  </p>
                  <span className="inline-block mt-2 px-2 py-1 bg-yellow-900 text-yellow-300 text-xs font-medium rounded">
                    Due: 1 week
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-slate-800 rounded-lg">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-slate-100 font-medium">
                    Reference Check Complete
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    All professional references have been contacted and verified
                    successfully
                  </p>
                  <span className="inline-block mt-2 px-2 py-1 bg-green-900 text-green-300 text-xs font-medium rounded">
                    Completed
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-slate-800 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-slate-100 font-medium">
                    Onboarding Preparation
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Complete your I-9 form and direct deposit information before
                    your start date
                  </p>
                  <span className="inline-block mt-2 px-2 py-1 bg-blue-900 text-blue-300 text-xs font-medium rounded">
                    Optional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
