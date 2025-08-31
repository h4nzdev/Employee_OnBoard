import { useContext, useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import JobOfferContext from "../../../context/JobOfferContext";

export default function AddJobOfferModal({ setIsOpen }: any) {
  const { fetchJobOffers } = useContext(JobOfferContext);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    department: "",
    slots: 0,
    status: "", // default numeric
    location: "",
    experienceLevel: "",
    priority: "",
    salaryRange: "",
    postedDate: "",
    deadline: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "slots" ? Number(value) : value, // keep status numeric
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/job-offer/add-job",
        formData
      );
      console.log(res.data);
      setFormData({
        title: "",
        category: "",
        department: "",
        slots: 0,
        status: "", // default numeric
        location: "",
        experienceLevel: "",
        priority: "",
        salaryRange: "",
        postedDate: "",
        deadline: "",
        description: "",
      });
      alert("Job added successfully");
      setIsOpen(false);
      fetchJobOffers();
    } catch (error) {}
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollable">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-slate-100">Add Job Offer</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <div className="space-y-4">
            {/* Title and Category Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Job Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
                >
                  <option value="">Select category</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="Operations">Operations</option>
                  <option value="HR">Human Resources</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Department
              </label>
              <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500"
              />
            </div>

            {/* Slots and Status Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Slots
                </label>
                <input
                  type="number"
                  name="slots"
                  placeholder="Slots"
                  value={formData.slots}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
                >
                  <option value="Closed">Closed</option>
                  <option value="Open">Open</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500"
              />
            </div>

            {/* Experience Level and Priority Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Experience Level
                </label>
                <input
                  type="text"
                  name="experienceLevel"
                  placeholder="Experience Level"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Priority
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
                >
                  <option value="">Select priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            {/* Salary Range */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Salary Range
              </label>
              <input
                type="text"
                name="salaryRange"
                placeholder="Salary Range"
                value={formData.salaryRange}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500"
              />
            </div>

            {/* Posted Date */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Posted Date
              </label>
              <input
                type="date"
                name="postedDate"
                value={formData.postedDate}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
              />
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-slate-400 hover:text-slate-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Job Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
