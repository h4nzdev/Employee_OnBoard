// Function to get badge color based on status
export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "open":
      return "bg-green-900 text-green-300";
    case "review":
      return "bg-yellow-900 text-yellow-300";
    case "on hold":
      return "bg-slate-700 text-slate-300";
    case "closed":
      return "bg-red-900 text-red-300";
    default:
      return "bg-gray-800 text-gray-300"; // fallback
  }
};

// Function to get badge color based on priority
export const getPriorityColor = (priority: string) => {
  switch (priority.toLowerCase()) {
    case "high":
      return "bg-red-900 text-red-300";
    case "medium":
      return "bg-yellow-900 text-yellow-300";
    case "low":
      return "bg-blue-900 text-blue-300";
    case "urgent":
      return "bg-red-900 text-red-300";
    case "paused":
      return "bg-slate-700 text-slate-300";
    default:
      return "bg-gray-800 text-gray-300"; // fallback
  }
};
