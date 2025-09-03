import { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode } from "react";

type AuthContextType = {
  role: "HR" | "Client" | "Employee";
  setRole: (role: "HR" | "Client" | "Employee") => void;
  user: any;
  setUser: any;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state from session storage if available
  const storedRole = sessionStorage.getItem('role') as "HR" | "Client" | "Employee" | null;
  const storedUser = sessionStorage.getItem('user');
  
  const [role, setRole] = useState<"HR" | "Client" | "Employee">(storedRole || "HR");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : undefined);
  
  // Logout function to clear session storage and reset state
  const logout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('role');
    setUser(undefined);
    setRole("HR");
  };

  return (
    <AuthContext.Provider value={{ role, setRole, user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
