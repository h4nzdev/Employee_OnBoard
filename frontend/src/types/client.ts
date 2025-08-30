// src/types/clients.ts
export type Requirement = {
  _id: string;
  title: string;
  priority: "High" | "Medium" | "Low";
  status: "Pending" | "Completed";
  type: string;
  dueDate: string;
  submittedDate: string | null;
  description: string;
};

export type Client = {
  _id: string;
  name: string;
  email: string;
  status: string;
  requirements: Requirement[];
  createdAt: string;
  updatedAt: string;
};
