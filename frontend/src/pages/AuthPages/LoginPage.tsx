import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

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
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-b from-slate-800 to-slate-900 items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-900/40"></div>
        <div className="relative z-10 text-center px-12">
          <div className="w-24 h-24 bg-slate-600 rounded-full mx-auto mb-8 flex items-center justify-center">
            <div className="w-12 h-12 bg-slate-300 rounded-lg"></div>
          </div>
          <h1 className="text-4xl font-bold text-slate-100 mb-4">Welcome Back</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Sign in to access your employee dashboard and manage your workspace efficiently.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-100 mb-2">Employee Login</h2>
            <p className="text-slate-400">Please sign in to your account</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
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
                placeholder="Enter your email address"
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
                <span className="ml-3 text-sm text-slate-300">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Sign In
            </button>

            {/* Register Link */}
            <div className="text-center pt-6 border-t border-slate-700">
              <p className="text-slate-400">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Register here
                </button>
              </p>
            </div>
          </div>

          {/* Mobile Branding */}
          <div className="lg:hidden mt-12 text-center">
            <div className="w-16 h-16 bg-slate-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-slate-300 rounded-md"></div>
            </div>
            <p className="text-slate-400 text-sm">Your trusted employee portal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;