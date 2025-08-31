import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ClientDashboard from "../pages/Client Pages/ClientDashboard";
import ClientLayout from "../layout/ClientLayout";
import ClientJobOffers from "../pages/Client Pages/ClientJobOffer";
import ClientMyApplication from "../pages/Client Pages/ClientMyApplication";

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
        <Route
          path="/client/my-applications"
          element={
            <ClientLayout>
              <ClientMyApplication />
            </ClientLayout>
          }
        />
        <Route path="*" element={<Navigate to="/client/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ClientRoutes;
