import HRPendingClientStats from "../../components/HRComponents/HRClient/ClientPending/HRPendingClientStats";
import HRPendingClientTableHead from "../../components/HRComponents/HRClient/ClientPending/HRPendingClientTableHead";
import HRPendingClientTableBody from "../../components/HRComponents/HRClient/ClientPending/HRPendingClientTableBody";
import HRPendingClientActionButtons from "../../components/HRComponents/HRClient/ClientPending/HRPendingClientActionButtons";

export default function HRClientPending() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Client Pending
        </h2>
        <p className="text-slate-400">
          Manage clients awaiting approval and processing
        </p>
      </div>

      {/* Stats Overview */}
      <HRPendingClientStats />

      {/* Pending Clients Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
        <HRPendingClientActionButtons />

        <div className="overflow-x-auto">
          <table className="w-full">
            <HRPendingClientTableHead />
            <HRPendingClientTableBody />
          </table>
        </div>
      </div>
    </div>
  );
}
