import {
  AlertCircle,
  Briefcase,
  Calendar,
  ChevronDown,
  ClipboardList,
  Home,
  LogOut,
  Settings,
  User,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";

const ClientSidebar = () => {
  return (
    <aside className="fixed w-64 bg-slate-900 border-r border-slate-800 left-0 top-0 h-screen z-50 overflow-hidden">
      <nav className="p-4 h-full overflow-y-auto relative">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-200">
            TechCorp Portal
          </h2>
          <p className="text-sm text-slate-400">Job Applicant Dashboard</p>
        </div>

        <div className="space-y-1">
          {/* Dashboard */}
          <div className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-3 bg-slate-800/80 text-blue-400 border-r-4 border-blue-400">
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </div>

          {/* Profile */}
          <div className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-3 text-slate-300 hover:bg-slate-800">
            <User className="w-5 h-5" />
            <span>Profile</span>
          </div>

          {/* Jobs Section - Static Expanded */}
          <div>
            <div className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between text-slate-300 hover:bg-slate-800">
              <div className="flex items-center space-x-3">
                <Briefcase className="w-5 h-5" />
                <span>Jobs</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>

            <div className="ml-6 mt-1 space-y-1">
              <Link to="/client/job-offer">
                <div className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm text-slate-400 hover:bg-slate-800 hover:text-slate-300">
                  Available Jobs
                </div>
              </Link>
              <div className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm text-slate-400 hover:bg-slate-800 hover:text-slate-300">
                My Applications
              </div>
            </div>
          </div>

          {/* HR Requirements Section - Static Expanded */}
          <div>
            <div className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between text-slate-300 hover:bg-slate-800">
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-5 h-5" />
                <span>HR Requirements</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>

            <div className="ml-6 mt-1 space-y-1">
              <div className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm text-slate-400 hover:bg-slate-800 hover:text-slate-300">
                Required Documents
              </div>
              <div className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm text-slate-400 hover:bg-slate-800 hover:text-slate-300">
                Verification Status
              </div>
            </div>
          </div>

          {/* Interviews */}
          <div className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-3 text-slate-300 hover:bg-slate-800">
            <Calendar className="w-5 h-5" />
            <span>Interviews</span>
          </div>

          {/* Settings */}
          <div className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-3 text-slate-300 hover:bg-slate-800">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="mt-6 pt-4 border-t border-slate-700">
          <h3 className="text-sm font-medium text-slate-400 mb-3">
            Quick Actions
          </h3>
          <div className="space-y-1">
            <div className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-3 text-slate-400 hover:bg-slate-800 hover:text-slate-300 text-sm">
              <UserPlus className="w-4 h-4" />
              <span>Update Profile</span>
            </div>
            <div className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-3 text-slate-400 hover:bg-slate-800 hover:text-slate-300 text-sm">
              <ClipboardList className="w-4 h-4" />
              <span>Submit Documents</span>
            </div>
            <div className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-3 text-slate-400 hover:bg-slate-800 hover:text-slate-300 text-sm">
              <Calendar className="w-4 h-4" />
              <span>Schedule Interview</span>
            </div>
          </div>
        </div>

        {/* Sign Out Button */}
        <div className="absolute bottom-4 left-4 right-4 border-t pt-4 border-slate-600">
          <div className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors flex items-center space-x-3">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default ClientSidebar;
