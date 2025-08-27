import {
  User,
  FileText,
  Calendar,
  DollarSign,
  BarChart3,
  Clock,
  Home,
  Settings,
  Users,
  FolderOpen,
  MessageSquare,
  LogOut,
} from "lucide-react";

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-slate-900 flex">
      <div className="w-64 bg-slate-800 border-r border-slate-700">
        <div className="p-6">
          <h1 className="text-xl font-bold text-slate-100">Client Portal</h1>
        </div>

        <nav className="px-4 space-y-2">
          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-3 text-slate-100 bg-slate-700 rounded-lg"
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-700 rounded-lg"
          >
            <FolderOpen className="w-5 h-5" />
            <span>Projects</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-700 rounded-lg"
          >
            <FileText className="w-5 h-5" />
            <span>Documents</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-700 rounded-lg"
          >
            <DollarSign className="w-5 h-5" />
            <span>Invoices</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-700 rounded-lg"
          >
            <Calendar className="w-5 h-5" />
            <span>Calendar</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-700 rounded-lg"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Messages</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-700 rounded-lg"
          >
            <Users className="w-5 h-5" />
            <span>Team</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-700 rounded-lg"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-700 rounded-lg"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </a>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">
            Client Dashboard
          </h2>
          <p className="text-slate-400">Welcome back, Sarah Johnson</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Active Projects</p>
                <p className="text-2xl font-bold text-slate-100">3</p>
              </div>
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Invoices</p>
                <p className="text-2xl font-bold text-slate-100">12</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Pending Tasks</p>
                <p className="text-2xl font-bold text-slate-100">7</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-400" />
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Meetings</p>
                <p className="text-2xl font-bold text-slate-100">2</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm mb-6">
          <div className="px-6 py-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-slate-100">
                Recent Projects
              </h3>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                <div>
                  <h4 className="text-slate-100 font-medium">
                    Website Redesign
                  </h4>
                  <p className="text-slate-400 text-sm">Due: March 15, 2024</p>
                </div>
                <span className="px-3 py-1 bg-green-900 text-green-300 text-xs font-medium rounded-full">
                  In Progress
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                <div>
                  <h4 className="text-slate-100 font-medium">
                    Mobile App Development
                  </h4>
                  <p className="text-slate-400 text-sm">Due: April 20, 2024</p>
                </div>
                <span className="px-3 py-1 bg-blue-900 text-blue-300 text-xs font-medium rounded-full">
                  Planning
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                <div>
                  <h4 className="text-slate-100 font-medium">Brand Identity</h4>
                  <p className="text-slate-400 text-sm">
                    Due: February 28, 2024
                  </p>
                </div>
                <span className="px-3 py-1 bg-yellow-900 text-yellow-300 text-xs font-medium rounded-full">
                  Review
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Meetings */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-slate-100">
                Upcoming Meetings
              </h3>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-slate-100 font-medium">
                    Project Kickoff Meeting
                  </h4>
                  <p className="text-slate-400 text-sm">Tomorrow at 2:00 PM</p>
                </div>
                <span className="text-blue-400 text-sm">Join</span>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-slate-100 font-medium">Design Review</h4>
                  <p className="text-slate-400 text-sm">Friday at 10:00 AM</p>
                </div>
                <span className="text-green-400 text-sm">Join</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
