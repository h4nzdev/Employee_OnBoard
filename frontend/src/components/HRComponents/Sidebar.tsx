"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  LogOut,
  X,
  ChevronDown,
  ChevronRight,
  UserPlus,
  ClipboardList,
  Clock,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }: any) => {
  const location = useLocation();
  const navigate = useNavigate();

  // State for dropdown menus
  const [clientDropdownOpen, setClientDropdownOpen] = useState(false);
  const [employeesDropdownOpen, setEmployeesDropdownOpen] = useState(false);

  // Simple menu items (no dropdowns)
  const simpleMenuItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { label: "Reports", icon: FileText, path: "/reports" },
    { label: "Settings", icon: Settings, path: "/settings" },
  ];

  // Client dropdown items
  const clientItems = [
    { label: "Client Requirements", path: "/client-requirements" },
    { label: "Pending Client", path: "/pending-client" },
  ];

  // Employees dropdown items
  const employeeItems = [
    { label: "Employees", path: "/employees" },
    { label: "Tasks Progress", path: "/tasks-progress" },
    { label: "Time Off", path: "/time-off" },
  ];

  // Quick action buttons
  const quickActions = [
    {
      label: "Add Employee",
      icon: UserPlus,
      action: () => navigate("/employees/add"),
    },
    {
      label: "New Report",
      icon: ClipboardList,
      action: () => navigate("/reports/new"),
    },
    {
      label: "Schedule Meeting",
      icon: Clock,
      action: () => navigate("/meetings/new"),
    },
  ];

  return (
    <aside
      className={`${
        isOpen ? "block" : "hidden"
      } fixed w-64 transition-all duration-300 bg-slate-900 border-r border-slate-800 left-0 top-0 h-full z-40 overflow-hidden`}
    >
      <nav className="p-4 h-full overflow-y-auto relative">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-slate-200">Menu</h2>
          <X
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:bg-slate-700 rounded-full p-1"
            size={28}
          />
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

          {/* Client Dropdown */}
          <div>
            <button
              onClick={() => setClientDropdownOpen(!clientDropdownOpen)}
              className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between text-slate-300 hover:bg-slate-800"
            >
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5" />
                <span>Client</span>
              </div>
              {clientDropdownOpen ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>

            {clientDropdownOpen && (
              <div className="ml-6 mt-1 space-y-1">
                {clientItems.map((item) => {
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

          {/* Employees Dropdown */}
          <div>
            <button
              onClick={() => setEmployeesDropdownOpen(!employeesDropdownOpen)}
              className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between text-slate-300 hover:bg-slate-800"
            >
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5" />
                <span>Employees</span>
              </div>
              {employeesDropdownOpen ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>

            {employeesDropdownOpen && (
              <div className="ml-6 mt-1 space-y-1">
                {employeeItems.map((item) => {
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
          <button className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors flex items-center space-x-3">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
