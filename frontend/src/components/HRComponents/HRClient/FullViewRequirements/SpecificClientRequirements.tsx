import { useContext, useEffect, useState } from "react";
import ApplicationContext from "../../../../context/ApplicationContext";
import type { Requirement } from "../../../../types/client"; // you can keep this type if it matches your application requirements
import { useParams } from "react-router-dom";
import SpecifiClientRequirementsTHead from "./SpecifiClientRequirementsTHead";
import SpecificClientRequirementsTBody from "./SpecificClientRequirementsTBody";
import SpecificClientRequirementsHeader from "./SpecificClientRequirementsHeader";

export default function ClientRequirementsDetail() {
  const { applications }: any = useContext(ApplicationContext);
  const { id } = useParams();
  const specApplication = applications.find((a: any) => a._id === id);
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  useEffect(() => {
    if (specApplication) {
      // If this application has requirements, set them, otherwise empty array
      setRequirements(specApplication.requirements ?? []);
    }
  }, [applications, specApplication]);

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
      {/* Header with Application Info */}
      <SpecificClientRequirementsHeader specClient={specApplication} />

      {/* Requirements Table */}
      <div className="px-6 py-4 border-b border-slate-800">
        <h4 className="text-md font-medium text-slate-200">
          Requirements ({requirements.length})
        </h4>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <SpecifiClientRequirementsTHead />
          <tbody className="divide-y divide-slate-800">
            {requirements.map((requirement) => (
              <SpecificClientRequirementsTBody
                key={requirement._id}
                requirement={requirement}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-slate-800">
        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>Showing {requirements.length} requirements</span>
          <div className="text-xs text-slate-500">
            Last updated: August 30, 2025
          </div>
        </div>
      </div>
    </div>
  );
}
