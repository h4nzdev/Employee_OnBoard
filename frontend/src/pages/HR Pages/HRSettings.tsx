import { Save, User, Bell, Shield } from "lucide-react";

export default function HRSettings() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Settings</h2>
        <p className="text-slate-400">Manage your account preferences.</p>
      </div>

      {/* Settings Categories */}
      <div className="space-y-6">
        {/* Profile Section */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-slate-100">Profile</h3>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="John Smith"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="john.smith@company.com"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Department
                </label>
                <select className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="Human Resources">Human Resources</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-slate-100">
                Notifications
              </h3>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Email Notifications
                </label>
                <div className="flex items-center">
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-blue-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                  </button>
                  <span className="ml-3 text-sm text-slate-400">Enabled</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Push Notifications
                </label>
                <div className="flex items-center">
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-slate-700">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                  </button>
                  <span className="ml-3 text-sm text-slate-400">Disabled</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-slate-100">Security</h3>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Two-Factor Authentication
                </label>
                <div className="flex items-center">
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-blue-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                  </button>
                  <span className="ml-3 text-sm text-slate-400">Enabled</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Session Timeout
                </label>
                <select className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="30 minutes">30 minutes</option>
                  <option value="1 hour">1 hour</option>
                  <option value="2 hours">2 hours</option>
                  <option value="4 hours">4 hours</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
}
