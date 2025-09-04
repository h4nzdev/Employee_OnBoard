import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { EmployeeProvider } from "./context/EmployeeContext.tsx";
import { ClientProvider } from "./context/ClientContext.tsx";
import { JobOfferProvider } from "./context/JobOfferContext.tsx";
import { ApplicationProvider } from "./context/ApplicationContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <EmployeeProvider>
        <ClientProvider>
          <JobOfferProvider>
            <ApplicationProvider>
              <App />
            </ApplicationProvider>
          </JobOfferProvider>
        </ClientProvider>
      </EmployeeProvider>
    </AuthProvider>
  </StrictMode>
);
