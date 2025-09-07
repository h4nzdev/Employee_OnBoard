import { useAuth } from "../../../../context/AuthContext";

const ClientLeftColumnSkills = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-100 mb-6">
        Technical Skills
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800/70 transition-colors">
          <span className="text-slate-200 font-medium text-lg">
            {user.skills}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClientLeftColumnSkills;
