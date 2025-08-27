export const getStatusColor = (status: string) => {
  switch (status) {
    case "Submitted":
      return "bg-green-900/30 text-green-300 border border-green-900";
    case "Pending":
      return "bg-yellow-900/30 text-yellow-300 border border-yellow-900";
    case "In Progress":
      return "bg-blue-900/30 text-blue-300 border border-blue-900";
    case "On Hold":
      return "bg-slate-800 text-slate-300 border border-slate-700";
    default:
      return "bg-slate-800 text-slate-300 border border-slate-700";
  }
};

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-900/30 text-red-300 border border-red-900";
    case "Medium":
      return "bg-orange-900/30 text-orange-300 border border-orange-900";
    case "Low":
      return "bg-gray-800 text-gray-300 border border-gray-700";
    default:
      return "bg-gray-800 text-gray-300 border border-gray-700";
  }
};
