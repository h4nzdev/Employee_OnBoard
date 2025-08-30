import { useContext, useEffect, useState } from "react";
import ClientContext from "../../../../context/ClientContext";
import type { Requirement } from "../../../../types/client";
import { useParams } from "react-router-dom";
import SpecifiClientRequirementsTHead from "./SpecifiClientRequirementsTHead";
import SpecificClientRequirementsTBody from "./SpecificClientRequirementsTBody";
import SpecificClientRequirementsHeader from "./SpecificClientRequirementsHeader";

export default function ClientRequirementsDetail() {
  const { client } = useContext(ClientContext);
  const { id } = useParams();
  const specClient = client.find((c) => c._id === id);
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  useEffect(() => {
    if (specClient) {
      // If this client has requirements, set them, otherwise empty array
      setRequirements(specClient.requirements ?? []);
    }
  }, [client, specClient]);

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
      {/* Header with Client Info */}
      <SpecificClientRequirementsHeader specClient={specClient} />
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
              <SpecificClientRequirementsTBody requirement={requirement} />
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
