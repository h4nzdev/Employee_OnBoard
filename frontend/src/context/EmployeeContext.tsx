import axios from "axios";
import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Employee } from "../types/employees";

type EmployeeContextType = {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  fetchEmployee: () => Promise<void>;
  loading: boolean;
};

const EmployeeContext = createContext<EmployeeContextType>({
  employees: [],
  setEmployees: () => {},
  fetchEmployee: async () => {},
  loading: false,
});

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchEmployee = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/employees/get");
      setEmployees(res.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <EmployeeContext.Provider
      value={{ employees, setEmployees, fetchEmployee, loading }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContext;
