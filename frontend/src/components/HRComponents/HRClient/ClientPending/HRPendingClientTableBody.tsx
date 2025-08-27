import { CheckCircle, XCircle } from "lucide-react";

const HRPendingClientTableBody = () => {
  return (
    <tbody className="divide-y divide-slate-800">
      <tr className="hover:bg-slate-800">
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium">JD</span>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-slate-100">John Doe</div>
              <div className="text-sm text-slate-400">john.doe@email.com</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
          New Registration
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 py-1 bg-yellow-900 text-yellow-300 text-xs font-medium rounded-full">
            Document Review
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 py-1 bg-red-900 text-red-300 text-xs font-medium rounded-full">
            High
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
          2 hours ago
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
          <button className="text-green-400 hover:text-green-300">
            <CheckCircle className="w-4 h-4" />
          </button>
          <button className="text-red-400 hover:text-red-300">
            <XCircle className="w-4 h-4" />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default HRPendingClientTableBody;
