import { MoreHorizontal } from "lucide-react";

const ClientMyApplicationTableBody = () => {
  return (
    <tbody className="divide-y divide-slate-800">
      <tr className="hover:bg-slate-800">
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-slate-100">
            Software Engineer Position
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
          Job Application
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 py-1 bg-green-900 text-green-300 text-xs font-medium rounded-full">
            Approved
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 py-1 bg-red-900 text-red-300 text-xs font-medium rounded-full">
            High
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
          2025-07-15
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
          <button className="text-slate-500 hover:text-slate-300">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ClientMyApplicationTableBody;
