import { useState } from "react";
import {
  AlertCircle,
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Home,
  LogOut,
  Settings,
  User,
  UserPlus,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ClientSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setRole } = useAuth();

  // State for dropdown menus
  const [jobsDropdownOpen, setJobsDropdownOpen] = useState(false);
  const [hrRequirementsDropdownOpen, setHrRequirementsDropdownOpen] =
    useState(false);

  // Simple menu items (no dropdowns)
  const simpleMenuItems = [
    { label: "Dashboard", icon: Home, path: "/client/dashboard" },
    { label: "Profile", icon: User, path: "/client/profile" },
    { label: "Interviews", icon: Calendar, path: "/client/interviews" },
    { label: "Settings", icon: Settings, path: "/client/settings" },
  ];

  // Jobs dropdown items
  const jobsItems = [
    { label: "Available Jobs", path: "/client/job-offer" },
    { label: "My Applications", path: "/client/my-applications" },
  ];

  // HR Requirements dropdown items
  const hrRequirementsItems = [
    { label: "Required Documents", path: "/client/required-documents" },
    { label: "Verification Status", path: "/client/verification-status" },
  ];

  // Quick action buttons
  const quickActions = [
    {
      label: "Update Profile",
      icon: UserPlus,
      action: () => navigate("/client/profile/edit"),
    },
    {
      label: "Submit Documents",
      icon: ClipboardList,
      action: () => navigate("/client/documents/submit"),
    },
    {
      label: "Schedule Interview",
      icon: Calendar,
      action: () => navigate("/client/interviews/schedule"),
    },
  ];

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
          {/* Simple menu items */}
          {simpleMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                  isActive
                    ? "bg-slate-800/80 text-blue-400 border-r-4 border-blue-400"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Jobs Section - Dynamic Dropdown */}
          <div>
            <button
              onClick={() => setJobsDropdownOpen(!jobsDropdownOpen)}
              className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between text-slate-300 hover:bg-slate-800"
            >
              <div className="flex items-center space-x-3">
                <Briefcase className="w-5 h-5" />
                <span>Jobs</span>
              </div>
              {jobsDropdownOpen ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>

            {jobsDropdownOpen && (
              <div className="ml-6 mt-1 space-y-1">
                {jobsItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <button
                      key={item.label}
                      onClick={() => navigate(item.path)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                        isActive
                          ? "bg-slate-800/80 text-blue-400 border-r-4 border-blue-400"
                          : "text-slate-400 hover:bg-slate-800 hover:text-slate-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* HR Requirements Section - Dynamic Dropdown */}
          <div>
            <button
              onClick={() =>
                setHrRequirementsDropdownOpen(!hrRequirementsDropdownOpen)
              }
              className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between text-slate-300 hover:bg-slate-800"
            >
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-5 h-5" />
                <span>HR Requirements</span>
              </div>
              {hrRequirementsDropdownOpen ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>

            {hrRequirementsDropdownOpen && (
              <div className="ml-6 mt-1 space-y-1">
                {hrRequirementsItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <button
                      key={item.label}
                      onClick={() => navigate(item.path)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                        isActive
                          ? "bg-slate-800/80 text-blue-400 border-r-4 border-blue-400"
                          : "text-slate-400 hover:bg-slate-800 hover:text-slate-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="mt-6 pt-4 border-t border-slate-700">
          <h3 className="text-sm font-medium text-slate-400 mb-3">
            Quick Actions
          </h3>
          <div className="space-y-1">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.label}
                  onClick={action.action}
                  className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-3 text-slate-400 hover:bg-slate-800 hover:text-slate-300 text-sm"
                >
                  <Icon className="w-4 h-4" />
                  <span>{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sign Out Button */}
        <div className="absolute bottom-4 left-4 right-4 border-t pt-4 border-slate-600">
          <button onClick={() => setRole("HR")} className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors flex items-center space-x-3">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default ClientSidebar;
