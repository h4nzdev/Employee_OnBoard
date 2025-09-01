import { User } from "lucide-react";
import ClientProfileInfo from "../../components/Client/ClientProfile/ClientProfileInfo";
import ClientProfileStatusBadges from "../../components/Client/ClientProfile/ClientProfileStatusBadges";
import ClientProfileLeftColumn from "../../components/Client/ClientProfile/ClientProfileLeftColumn/ClientProfileLeftColumn";
import ClientProfileRightColumn from "../../components/Client/ClientProfile/ClientProfileRightColumn/ClientProfileRightColumn";

const ClientProfile = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="flex items-center space-x-8">
            {/* Profile Avatar */}
            <div className="w-32 h-32 bg-slate-600 rounded-2xl flex items-center justify-center shadow-xl">
              <User className="w-16 h-16 text-slate-300" />
            </div>

            {/* Profile Info */}
            <ClientProfileInfo />
            {/* Status Badges */}
            <ClientProfileStatusBadges />
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Skills & Application Details */}
          <ClientProfileLeftColumn />
          {/* Right Column - Requirements & Notes */}
          <ClientProfileRightColumn />
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
