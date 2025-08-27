import { Bell, Menu } from "lucide-react";

const Header = ({ isOpen, setIsOpen }: any) => {
  return (
    <header className="bg-slate-900/80 backdrop-blur border-b border-slate-700 sticky top-0 z-30">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {!isOpen && (
              <Menu
                onClick={() => setIsOpen(true)}
                className="cursor-pointer hover:bg-slate-800"
              />
            )}
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm shadow-blue-500/20">
              <span className="text-white font-bold text-sm">HR</span>
            </div>
            <h1 className="text-xl font-semibold text-slate-100">
              Human Resources
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 text-slate-400 hover:text-slate-200 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                <span className="text-slate-200 font-medium text-sm">JD</span>
              </div>
              <span className="text-sm font-medium text-slate-200">
                John Doe
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
