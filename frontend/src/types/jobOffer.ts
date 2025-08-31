export type JobOffer = {
  _id: string;
  title: string;
  category: string;
  slots: number;
  status: string;
  location: string;
  postedDate: string;
  deadline: string;
  priority: string;
  department: string;
  experienceLevel: string;
  salaryRange: string;
  description: string;
};

// 2. Define the context type
export type JobOfferContextType = {
  jobOffer: JobOffer[];
  setJobOffer: React.Dispatch<React.SetStateAction<JobOffer[]>>;
  loading: boolean;
  fetchJobOffers: () => Promise<void>;
};
