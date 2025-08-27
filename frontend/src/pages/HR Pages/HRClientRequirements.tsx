import HRClientRequirementsHeader from "../../components/HRComponents/HRClient/ClientRequirements/HRClientRequirementsHeader";
import HRClientRequirementsTableHead from "../../components/HRComponents/HRClient/ClientRequirements/HRClientRequirementsTableHead";
import HRClientRequirementsTableBody from "../../components/HRComponents/HRClient/ClientRequirements/HRClientRequirementsTableBody";
import TableActionButton from "../../components/TableActionButton";

export default function HRClientRequirements() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Client Requirements
        </h2>
        <p className="text-slate-400">
          Track document submissions and requirements.
        </p>
      </div>

      {/* Requirements Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
        <div className="px-6 py-4 border-b border-slate-800">
          <HRClientRequirementsHeader />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <HRClientRequirementsTableHead />
            <HRClientRequirementsTableBody />
          </table>
        </div>
        <TableActionButton />
      </div>
    </div>
  );
}
