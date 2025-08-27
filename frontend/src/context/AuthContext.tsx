import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type AuthContextType = {
  role: "HR" | "Client";
  setRole: (role: "HR" | "Client") => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<"HR" | "Client">("HR");

  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
