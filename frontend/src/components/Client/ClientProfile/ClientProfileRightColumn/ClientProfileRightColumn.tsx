
import ClientRightRequirements from "./ClientRightRequirements";
import ClientRightSystemInfo from "./ClientRightSystemInfo";
import ClientRightProfessionalNotes from "./ClientRightProfessionalNotes";

const ClientProfileRightColumn = () => {
  return (
    <div className="lg:col-span-2 space-y-8">
      {/* Professional Notes */}
      <ClientRightProfessionalNotes />

      {/* Current Requirement */}
      <ClientRightRequirements />
      {/* System Information */}
      <ClientRightSystemInfo />
    </div>
  );
};

export default ClientProfileRightColumn;
