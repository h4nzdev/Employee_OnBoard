import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/AuthPages/LoginPage";
import RegisterPage from "../pages/AuthPages/RegisterPage";

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;
