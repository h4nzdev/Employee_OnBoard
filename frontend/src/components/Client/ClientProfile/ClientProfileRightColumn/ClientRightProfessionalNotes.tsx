import { useAuth } from "../../../../context/AuthContext";

const ClientRightProfessionalNotes = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-100 mb-6">
        Professional Assessment
      </h2>
      <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
        <p className="text-slate-200 text-lg leading-relaxed">{user.notes}</p>
      </div>
    </div>
  );
};

export default ClientRightProfessionalNotes;
