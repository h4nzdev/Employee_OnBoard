import ClientSidebar from "../components/Client/ClientSidebar";

const ClientLayout = ({ children }: any) => {
  return (
    <div className="min-h-screen max-h-auto bg-slate-900 text-slate-200">
      <div className="flex">
        {/* Sidebar */}
        <ClientSidebar />
        {/* Main content */}
        <div className="transition-all duration-300 flex-1 flex flex-col min-h-screen bg-slate-900">
          <main className="p-8 bg-slate-900">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;
