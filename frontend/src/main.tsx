import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { EmployeeProvider } from "./context/EmployeeContext.tsx";
import { ClientProvider } from "./context/ClientContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <EmployeeProvider>
        <ClientProvider>
          <App />
        </ClientProvider>
      </EmployeeProvider>
    </AuthProvider>
  </StrictMode>
);
