import axios from "axios";
import { createContext, useState } from "react";

const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);

  // function to fetch applications
  const fetchApplications = async () => {
    try {
      const res = await axios.get("http://localhost:3000/get/application");
      setApplications(res.data.applications);
      console.log(res.data.applications);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ApplicationContext.Provider
      value={{ applications, setApplications, fetchApplications }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContext;
