import { CheckCircle, ExternalLink, Mail, Phone } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";

const ClientProfileInfo = () => {
  const { user } = useAuth();
  return (
    <div className="flex-1">
      <div className="flex items-center space-x-4 mb-3">
        <h1 className="text-4xl font-bold text-slate-100">{user.name}</h1>
        <CheckCircle className="w-8 h-8 text-green-400" />
      </div>
      <p className="text-xl text-slate-300 mb-4">{user.experienceLevel}</p>

      {/* Contact Info Row */}
      <div className="flex items-center space-x-8 text-slate-300">
        <div className="flex items-center space-x-2">
          <Mail className="w-5 h-5 text-slate-400" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-5 h-5 text-slate-400" />
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <ExternalLink className="w-5 h-5 text-slate-400" />
          <a
            href={user.linkedinProfile}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientProfileInfo;
