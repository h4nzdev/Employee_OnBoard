import HRDashboardStats from "../../components/HRComponents/HRDashboard/HRDashboardStats";
import HRDashboardHeader from "../../components/HRComponents/HRDashboard/HRDashboardHeader";
import HRTableHeader from "../../components/HRComponents/HRDashboard/HRTableHeader";
import HRTableBody from "../../components/HRComponents/HRDashboard/HRTableBody";
import HRDashboardTableButton from "../../components/HRComponents/HRDashboard/HRDashboardTableButton";

export default function HRDashboard() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Main Content */}
      <main>
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-2">
            Good morning, Hanz 👋
          </h2>
          <p className="text-slate-400">
            Here's what's happening with your team today.
          </p>
        </div>

        {/* Stats Grid */}
        <HRDashboardStats />

        {/* Recent Employees Table */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
          <HRDashboardHeader />
          <div className="overflow-x-auto">
            <table className="w-full">
              <HRTableHeader />
              <HRTableBody />
            </table>
          </div>

          <div className="px-6 py-4 border-t border-slate-200">
            <HRDashboardTableButton />
          </div>
        </div>
      </main>
    </div>
  );
}
