import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HRDashboard from "../pages/HR Pages/HRDashboard";
import HRSettings from "../pages/HR Pages/HRSettings";
import HRClientRequirements from "../pages/HR Pages/HRClientRequirements";
import HRClientPending from "../pages/HR Pages/HRClientPending";
import SpecificClientRequirements from "../components/HRComponents/HRClient/FullViewRequirements/SpecificClientRequirements";
import HRJobOffers from "../pages/HR Pages/HRJobOffer";
import HRInterviews from "../pages/HR Pages/HRInterviews";

const HRRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <HRDashboard />
            </MainLayout>
          }
        />
        <Route
          path="/job-offer"
          element={
            <MainLayout>
              <HRJobOffers />
            </MainLayout>
          }
        />
        <Route
          path="/interviews"
          element={
            <MainLayout>
              <HRInterviews />
            </MainLayout>
          }
        />
        <Route
          path="/client-requirements"
          element={
            <MainLayout>
              <HRClientRequirements />
            </MainLayout>
          }
        />
        <Route
          path="/pending-client"
          element={
            <MainLayout>
              <HRClientPending />
            </MainLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <MainLayout>
              <HRSettings />
            </MainLayout>
          }
        />
        <Route
          path="/application-requirements/:id"
          element={
            <MainLayout>
              <SpecificClientRequirements />
            </MainLayout>
          }
        />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default HRRoutes;
