import { useContext, useState } from "react";
import ApplyJobModal from "../../components/Client/ApplyJobModal/ApplyJobModal";
import ClientJobOfferGrid from "../../components/Client/ClientJobOffers/ClientJobOfferGrid";
import ClientJobOffersFilter from "../../components/Client/ClientJobOffers/ClientJobOffersFilter";
import JobOfferContext from "../../context/JobOfferContext";

export default function ClientJobOffers() {
  const [isOpen, setIsOpen] = useState(false);
  const [jobId, setJobId] = useState(undefined);
  const { jobOffer } = useContext(JobOfferContext);
  console.log(jobId);
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          Available Job Opportunities
        </h2>
        <p className="text-slate-400">Find your next career opportunity</p>
      </div>
      <ClientJobOffersFilter />
      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Job Card 1 */}
        {jobOffer.map((job) => (
          <ClientJobOfferGrid
            job={job}
            setJobId={setJobId}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
      {isOpen && (
        <ApplyJobModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setJobId={setJobId}
          jobId={jobId}
        />
      )}
    </div>
  );
}
