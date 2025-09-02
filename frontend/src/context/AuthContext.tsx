import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type AuthContextType = {
  role: "HR" | "Client" | "Employee";
  setRole: (role: "HR" | "Client" | "Employee") => void;
  user: any;
  setUser: any;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<"HR" | "Client" | "Employee">("HR");
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ role, setRole, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
