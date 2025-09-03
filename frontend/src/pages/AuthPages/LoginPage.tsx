import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("Client");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser, setRole } = useAuth();

  // Login form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (error) setError("");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please enter both email and password");
      return;
    }
    
    try {
      setLoading(true);
      setError("");
      
      let res;
      if (activeTab === "Client") {
        res = await axios.post("http://localhost:3000/client/login", formData);
        // Store user data in context
        setUser(res.data);
        setRole(res.data.role);
        
        // Store user data in session storage
        sessionStorage.setItem('user', JSON.stringify(res.data));
        sessionStorage.setItem('role', res.data.role);
      } else if (activeTab === "HR") {
        res = await axios.post("http://localhost:3000/hr/login", formData);
        // Store user data in context
        setUser(res.data);
        setRole(res.data.role);
        
        // Store user data in session storage
        sessionStorage.setItem('user', JSON.stringify(res.data));
        sessionStorage.setItem('role', res.data.role);
      }
      
      // Reset form
      setFormData({
        email: "",
        password: "",
      });
      
      // Navigate to dashboard
      navigate("/dashboard");
      
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.response?.data?.error || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Branding */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-slate-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <div className="w-10 h-10 bg-slate-300 rounded-lg"></div>
          </div>
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-400">Please sign in to your account</p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
          {/* Tabs */}
          <div className="flex">
            <button
              onClick={() => setActiveTab("HR")}
              className={`flex-1 py-4 px-6 text-sm font-semibold transition-all duration-200 ${
                activeTab === "HR"
                  ? "bg-blue-600 text-white border-b-2 border-blue-400"
                  : "bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-slate-100"
              }`}
            >
              HR Portal
            </button>
            <button
              onClick={() => setActiveTab("Client")}
              className={`flex-1 py-4 px-6 text-sm font-semibold transition-all duration-200 ${
                activeTab === "Client"
                  ? "bg-blue-600 text-white border-b-2 border-blue-400"
                  : "bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-slate-100"
              }`}
            >
              Client Portal
            </button>
          </div>

          <div className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-100 mb-2">
                {activeTab === "HR" ? "HR Login" : "Client Login"}
              </h2>
              <p className="text-slate-400 text-sm">
                {activeTab === "Client"
                  ? "Access employee management dashboard"
                  : "Access your client dashboard"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-300">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={
                    activeTab === "HR"
                      ? "Enter your HR email address"
                      : "Enter your client email address"
                  }
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-300">
                  Password <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-slate-600 bg-slate-800/50 text-blue-600 focus:ring-blue-500 focus:ring-2 focus:ring-offset-0"
                  />
                  <span className="ml-3 text-sm text-slate-300">
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-100 px-4 py-3 rounded-xl mb-4">
                  {error}
                </div>
              )}
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Logging in..." : `Sign In as ${activeTab === "HR" ? "HR" : "Client"}`}
              </button>

              {/* Register Link */}
              <div className="text-center pt-6 border-t border-slate-700">
                <p className="text-slate-400">
                  {activeTab === "HR" ? "New HR member?" : "New client?"}{" "}
                  <Link to="/register">
                    <button
                      type="button"
                      className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                      Register here
                    </button>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-slate-500 text-sm">
            Secure {activeTab === "HR" ? "HR management" : "client access"}{" "}
            portal
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
