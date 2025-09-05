import { requirements } from "../data/requirements";
export type Requirement = {
  _id: string;
  title: string;
  name: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "In Progress" | "Submitted";
  type: string;
  dueDate: string | null; // ISO string from Mongo
  submittedDate: string | null; // can be null
  description?: string;
};

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

export type Application = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  status: string;
  skills: string[];
  linkedInProfile: string;
  notes: string;
  jobOffer: JobOffer;
  client: string;
  applicationDate: string;
  requirements?: Requirement[];
  createdAt: string;
  updatedAt: string;
};
