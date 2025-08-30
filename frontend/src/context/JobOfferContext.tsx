import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";
import type { JobOffer, JobOfferContextType } from "../types/jobOffer";

const JobOfferContext = createContext<JobOfferContextType>({
  jobOffer: [],
  setJobOffer: () => {},
  loading: false,
  fetchJobOffers: async () => {},
});

export const JobOfferProvider = ({ children }: { children: ReactNode }) => {
  const [jobOffer, setJobOffer] = useState<JobOffer[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchJobOffers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/job-offer/get-job");
      setJobOffer(res.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobOffers();
  }, []);

  return (
    <JobOfferContext.Provider
      value={{ jobOffer, setJobOffer, loading, fetchJobOffers }}
    >
      {children}
    </JobOfferContext.Provider>
  );
};

export default JobOfferContext;
