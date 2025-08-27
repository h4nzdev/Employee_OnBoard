import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ClientDashboard from "../pages/Client Pages/ClientDashboard";

const ClientRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="*" element={<Navigate to="/client/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ClientRoutes;
