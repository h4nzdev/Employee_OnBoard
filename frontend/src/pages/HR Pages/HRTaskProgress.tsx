import HRTaskProgressHeader from "../../components/HRComponents/HRTaskProgress/HRTaskProgressHeader";
import HRTaskProgressTableHead from "../../components/HRComponents/HRTaskProgress/HRTaskProgressTableHead";
import HRTaskProgressTableBody from "../../components/HRComponents/HRTaskProgress/HRTaskProgressTableBody";
import TableActionButton from "../../components/TableActionButton";

export default function HRTaskProgress() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Task Progress
        </h2>
        <p className="text-slate-400">
          Track project tasks and monitor completion progress.
        </p>
      </div>

      {/* Task Progress Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
        <HRTaskProgressHeader />

        <div className="overflow-x-auto">
          <table className="w-full">
            <HRTaskProgressTableHead />
            <HRTaskProgressTableBody />
          </table>
        </div>

        <TableActionButton />
      </div>
    </div>
  );
}
