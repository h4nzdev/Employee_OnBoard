import { X } from "lucide-react";

export default function AddJobOfferModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-slate-100">Add Job Position</h2>
          <button className="text-slate-400 hover:text-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <div className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Title
              </label>
              <input
                type="text"
                value="Senior Frontend Developer"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
              />
            </div>

            {/* Category and Department Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value="Engineering"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Department
                </label>
                <input
                  type="text"
                  value="Technology"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
                />
              </div>
            </div>

            {/* Slots and Status Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Slots
                </label>
                <input
                  type="number"
                  value="2"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Status
                </label>
                <select className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100">
                  <option selected>Open</option>
                  <option>Closed</option>
                  <option>On Hold</option>
                  <option>Draft</option>
                </select>
              </div>
            </div>

            {/* Location and Experience Level Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value="Remote"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Experience Level
                </label>
                <select className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100">
                  <option>Junior</option>
                  <option>Mid</option>
                  <option selected>Senior</option>
                </select>
              </div>
            </div>

            {/* Priority and Salary Range Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Priority
                </label>
                <select className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100">
                  <option>Low</option>
                  <option>Medium</option>
                  <option selected>High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Salary Range
                </label>
                <input
                  type="text"
                  value="P80,000 - P120,000"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
                />
              </div>
            </div>

            {/* Posted Date and Deadline Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Posted Date
                </label>
                <input
                  type="date"
                  value="2024-01-15"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Deadline
                </label>
                <input
                  type="date"
                  value="2024-02-15"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Description
              </label>
              <textarea
                value="Looking for experienced React/Next.js developers"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
              ></textarea>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 mt-6">
            <button className="px-4 py-2 text-slate-400 hover:text-slate-100">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
