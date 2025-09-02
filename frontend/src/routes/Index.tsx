import { useAuth } from "../context/AuthContext";
import HRRoutes from "./HRRoutes";
import ClientRoutes from "./ClientRoutes";
import AuthRoutes from "./AuthRoutes";

const Index = () => {
  const { role, user } = useAuth();
  if (!user) {
    return <AuthRoutes />;
  }

  if (role === "HR") return <HRRoutes />;
  if (role === "Client") return <ClientRoutes />;
  return null;
};

export default Index;
