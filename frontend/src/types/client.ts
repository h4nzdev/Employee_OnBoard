export type Requirement = {
  _id: string;
  title: string;
  name: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "In Progress" | "Submitted";
  type: string;
  dueDate: string | null;        // ISO string from Mongo
  submittedDate: string | null;  // can be null
  description?: string;
};

export type Client = {
  _id: string;
  name: string;
  email: string;
  type: string
  progress: number
  status: string;
  requirements?: Requirement[];
  createdAt: string;
  updatedAt: string;
};
