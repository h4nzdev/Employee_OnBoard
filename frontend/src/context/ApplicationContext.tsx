import axios from "axios";
import React, {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Application } from "../types/application";

type ApplicationContextType = {
  applications: Application[];
  setApplications: React.Dispatch<React.SetStateAction<Application[]>>;
  fetchApplications: () => Promise<void>;
};

const ApplicationContext = createContext<ApplicationContextType>({
  applications: [],
  setApplications: () => {},
  fetchApplications: async () => {},
});

export const ApplicationProvider = ({ children }: { children: ReactNode }) => {
  const [applications, setApplications] = useState<Application[]>([]);

  // function to fetch applications
  const fetchApplications = async () => {
    try {
      const res = await axios.get("http://localhost:3000/get/application");
      setApplications(res.data.applications);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // in ApplicationContext.tsx
  useEffect(() => {
    fetchApplications(); // fetch once at mount

    const interval = setInterval(() => {
      fetchApplications(); // refetch every 5 seconds
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <ApplicationContext.Provider
      value={{ applications, setApplications, fetchApplications }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContext;
