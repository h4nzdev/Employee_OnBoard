import HRDashboardStats from "../../components/HRComponents/HRDashboard/HRDashboardStats";
import HRDashboardHeader from "../../components/HRComponents/HRDashboard/HRDashboardHeader";
import HRTableHeader from "../../components/HRComponents/HRDashboard/HRTableHeader";
import HRTableBody from "../../components/HRComponents/HRDashboard/HRTableBody";
import HRDashboardTableButton from "../../components/HRComponents/HRDashboard/HRDashboardTableButton";

export default function HRDashboard() {
  const employees = [
    {
      id: 1,
      name: "Alexandra Chen",
      email: "alexandra.chen@company.com",
      role: "Senior Software Engineer",
      department: "Engineering",
      status: "Active",
      joinDate: "2023-01-15",
      avatar: "AC",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      email: "marcus.rodriguez@company.com",
      role: "Product Manager",
      department: "Product",
      status: "Active",
      joinDate: "2022-08-22",
      avatar: "MR",
    },
    {
      id: 3,
      name: "Sarah Kim",
      email: "sarah.kim@company.com",
      role: "UX Designer",
      department: "Design",
      status: "On Leave",
      joinDate: "2023-03-10",
      avatar: "SK",
    },
    {
      id: 4,
      name: "David Thompson",
      email: "david.thompson@company.com",
      role: "Marketing Director",
      department: "Marketing",
      status: "Active",
      joinDate: "2021-11-05",
      avatar: "DT",
    },
    {
      id: 5,
      name: "Emily Zhang",
      email: "emily.zhang@company.com",
      role: "Data Analyst",
      department: "Analytics",
      status: "Pending",
      joinDate: "2024-08-20",
      avatar: "EZ",
    },
    {
      id: 6,
      name: "James Wilson",
      email: "james.wilson@company.com",
      role: "Sales Manager",
      department: "Sales",
      status: "Active",
      joinDate: "2022-02-14",
      avatar: "JW",
    },
  ];

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
        <HRDashboardStats employees={employees} />

        {/* Recent Employees Table */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
          <HRDashboardHeader />
          <div className="overflow-x-auto">
            <table className="w-full">
              <HRTableHeader />
              <HRTableBody employees={employees} />
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
