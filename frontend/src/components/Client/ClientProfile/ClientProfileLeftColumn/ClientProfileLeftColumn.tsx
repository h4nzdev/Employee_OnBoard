import ClientLeftColumnApplication from "./ClientLeftColumnApplication";
import ClientLeftColumnSkills from "./ClientLeftColumnSkills";

const ClientProfileLeftColumn = () => {
  return (
    <div className="space-y-8">
      {/* Skills Section */}
      <ClientLeftColumnSkills />

      {/* Application Details */}
    <ClientLeftColumnApplication />
    </div>
  );
};

export default ClientProfileLeftColumn;
