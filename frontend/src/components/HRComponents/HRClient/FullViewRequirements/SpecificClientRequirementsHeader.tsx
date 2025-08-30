import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SpecificClientRequirementsHeader = ({ specClient }: any) => {
  const navigate = useNavigate();
  return (
    <div className="px-6 py-4 border-b border-slate-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate(-1)} className="text-slate-400 hover:text-slate-100 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">
                {specClient?.name.slice(0, 1)}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100">
                {specClient?.name}
              </h3>
              <p className="text-sm text-slate-400">{specClient?.email}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-400 border border-green-800">
            {specClient?.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpecificClientRequirementsHeader;
