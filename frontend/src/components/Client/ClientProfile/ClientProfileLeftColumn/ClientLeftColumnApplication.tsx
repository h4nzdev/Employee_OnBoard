import { useAuth } from "../../../../context/AuthContext";

const ClientLeftColumnApplication = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-100 mb-6">
        Application Info
      </h2>
      <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-400 font-medium">Application Date</span>
          <span className="text-slate-200">
            {user.applicationDate.slice(1, 10)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-400 font-medium">Job ID</span>
          <span className="text-slate-200 font-mono text-sm">
            68b303b97196a68b55b44e58
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-400 font-medium">Profile ID</span>
          <span className="text-slate-200 font-mono text-sm">{user._id}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientLeftColumnApplication;
