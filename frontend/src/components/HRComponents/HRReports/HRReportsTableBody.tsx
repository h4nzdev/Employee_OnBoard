import { FileText, MoreHorizontal } from "lucide-react";
import reports from "../../../data/reports";

const HRReportsTableBody = () => {
  return (
    <tbody className="divide-y divide-slate-800">
      {reports.map((report) => (
        <tr key={report.id} className="hover:bg-slate-800/60 transition-colors">
          <td className="py-4 px-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-slate-100">{report.title}</div>
                <div className="text-sm text-slate-400">
                  Auto-generated, static data
                </div>
              </div>
            </div>
          </td>
          <td className="py-4 px-6 text-sm text-slate-200">{report.type}</td>
          <td className="py-4 px-6 text-sm text-slate-400">
            {report.createdOn}
          </td>
          <td className="py-4 px-6">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                report.status === "Ready"
                  ? "bg-green-900/30 text-green-300 border border-green-900"
                  : "bg-amber-900/30 text-amber-300 border border-amber-900"
              }`}
            >
              {report.status}
            </span>
          </td>
          <td className="py-4 px-6 text-sm text-slate-400">{report.size}</td>
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

export default HRReportsTableBody;
