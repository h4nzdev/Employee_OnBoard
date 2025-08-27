import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { EmployeeProvider } from "./context/EmployeeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <EmployeeProvider>
        <App />
      </EmployeeProvider>
    </AuthProvider>
  </StrictMode>
);
