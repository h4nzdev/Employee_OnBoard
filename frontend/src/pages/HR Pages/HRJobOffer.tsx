import { Users } from "lucide-react";
import HRJobOffersStats from "../../components/HRComponents/HRJobOffers/HRJobOffersStats";
import HRJobOffersTableHead from "../../components/HRComponents/HRJobOffers/HRJobOffersTableHead";
import HRJobOffersTableBody from "../../components/HRComponents/HRJobOffers/HRJobOffersTableBody";
import HRJobOffersTable from "../../components/HRComponents/HRJobOffers/HRJobOffersTable";

export default function HRJobOffers() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Job Offers</h2>
        <p className="text-slate-400">
          Available positions and recommendations
        </p>
      </div>

      {/* Stats Overview */}
      <HRJobOffersStats />

      {/* Job Offers Table */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
        <HRJobOffersTable />

        <div className="overflow-x-auto">
          <table className="w-full">
            <HRJobOffersTableHead />
            <HRJobOffersTableBody />
          </table>
        </div>
      </div>
    </div>
  );
}
