import ClientMyApplicationTableHead from "../../components/Client/ClientMyApplication/ClientMyApplicationTableHead";
import ClientMyApplicationTableBody from "../../components/Client/ClientMyApplication/ClientMyApplicationTableBody";

export default function MyApplicationsView() {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
      {/* Header with Client Info */}
      <div className="px-6 py-4 border-b border-slate-800">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-medium">FV</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100">
              France Laurence Velarde
            </h3>
            <p className="text-sm text-slate-400">
              france.velarde@email.com • Software Engineer
            </p>
          </div>
        </div>
      </div>

      {/* Applications Table */}
      <div className="px-6 py-4 border-b border-slate-800">
        <h4 className="text-md font-medium text-slate-200">
          My Applications (5)
        </h4>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <ClientMyApplicationTableHead />
          <ClientMyApplicationTableBody />
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-slate-800">
        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>Showing 5 applications</span>
          <div className="text-xs text-slate-500">
            Last updated: August 30, 2025
          </div>
        </div>
      </div>
    </div>
  );
}
