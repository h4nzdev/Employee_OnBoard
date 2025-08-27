import { useAuth } from "../context/AuthContext";
import HRRoutes from "./HRRoutes";
import ClientRoutes from "./ClientRoutes";

const Index = () => {
  const { role } = useAuth();
  if (role === "HR") return <HRRoutes />;
  if (role === "Client") return <ClientRoutes />;
  return null;
};

export default Index;
