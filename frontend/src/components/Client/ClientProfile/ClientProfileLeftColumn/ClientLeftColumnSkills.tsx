const ClientLeftColumnSkills = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-100 mb-6">
        Technical Skills
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800/70 transition-colors">
          <span className="text-slate-200 font-medium text-lg">React</span>
          <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
            Frontend
          </span>
        </div>
        <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800/70 transition-colors">
          <span className="text-slate-200 font-medium text-lg">Node.js</span>
          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
            Backend
          </span>
        </div>
        <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800/70 transition-colors">
          <span className="text-slate-200 font-medium text-lg">TypeScript</span>
          <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
            Language
          </span>
        </div>
        <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800/70 transition-colors">
          <span className="text-slate-200 font-medium text-lg">MongoDB</span>
          <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
            Database
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClientLeftColumnSkills;
