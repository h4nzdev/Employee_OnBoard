import { MoreHorizontal } from "lucide-react";
import { requests } from "../../../data/requests";

const HRTimeOffTableBody = () => {
  return (
    <tbody className="divide-y divide-slate-800">
      {requests.map((r) => (
        <tr key={r.id} className="hover:bg-slate-800/60 transition-colors">
          <td className="py-4 px-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {r.avatar}
                </span>
              </div>
              <div>
                <div className="font-medium text-slate-100">{r.employee}</div>
                <div className="text-sm text-slate-400">{r.email}</div>
              </div>
            </div>
          </td>
          <td className="py-4 px-6 text-sm text-slate-200">{r.type}</td>
          <td className="py-4 px-6 text-sm text-slate-400">{r.start}</td>
          <td className="py-4 px-6 text-sm text-slate-400">{r.end}</td>
          <td className="py-4 px-6 text-sm text-slate-200">{r.days}</td>
          <td className="py-4 px-6">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                r.status === "Approved"
                  ? "bg-green-900/30 text-green-300 border border-green-900"
                  : r.status === "Pending"
                  ? "bg-amber-900/30 text-amber-300 border border-amber-900"
                  : "bg-red-900/30 text-red-300 border border-red-900"
              }`}
            >
              {r.status}
            </span>
          </td>
          <td className="py-4 px-6 text-right">
            <button className="text-slate-500 hover:text-slate-300 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default HRTimeOffTableBody;
