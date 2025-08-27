export type Task = {
  taskId: string; // or ObjectId as string
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  assignedTo: string; // employee id
  dueDate: string;
};

export type Employee = {
  _id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: string;
  createdAt: string;
  tasks?: Task[];
};