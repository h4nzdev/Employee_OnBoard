import { CheckCircle } from "lucide-react";
import React from "react";

const ClientProfileStatusBadges = () => {
  return (
    <div className="flex flex-col space-y-3">
      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-green-900/30 text-green-400 border border-green-800/50">
        <CheckCircle className="w-4 h-4 mr-2" />
        Approved
      </span>
      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-900/30 text-blue-400 border border-blue-800/50">
        New Registration
      </span>
    </div>
  );
};

export default ClientProfileStatusBadges;
