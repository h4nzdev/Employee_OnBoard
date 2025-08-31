import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ClientDashboard from "../pages/Client Pages/ClientDashboard";
import ClientLayout from "../layout/ClientLayout";
import ClientJobOffers from "../pages/Client Pages/ClientJobOffer";

const ClientRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/client/dashboard"
          element={
            <ClientLayout>
              <ClientDashboard />
            </ClientLayout>
          }
        />
        <Route
          path="/client/job-offer"
          element={
            <ClientLayout>
              <ClientJobOffers />
            </ClientLayout>
          }
        />
        <Route path="*" element={<Navigate to="/client/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ClientRoutes;
