import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HRDashboard from "../pages/HR Pages/HRDashboard";
import HREmployees from "../pages/HR Pages/HREmployees";
import HRReports from "../pages/HR Pages/HRReports";
import HRTimeOff from "../pages/HR Pages/HRTimeOff";
import HRTaskProgress from "../pages/HR Pages/HRTaskProgress";
import HRSettings from "../pages/HR Pages/HRSettings";
import HRClientRequirements from "../pages/HR Pages/HRClientRequirements";
import HRClientPending from "../pages/HR Pages/HRClientPending";

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
          path="/employees"
          element={
            <MainLayout>
              <HREmployees />
            </MainLayout>
          }
        />
        <Route
          path="/reports"
          element={
            <MainLayout>
              <HRReports />
            </MainLayout>
          }
        />
        <Route
          path="/time-off"
          element={
            <MainLayout>
              <HRTimeOff />
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
          path="/tasks-progress"
          element={
            <MainLayout>
              <HRTaskProgress />
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
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default HRRoutes;
