import { X } from "lucide-react";
import { useContext, useState } from "react";
import EmployeeContext from "../../../context/EmployeeContext";
import axios from "axios";
import TaskTitleInput from "./TaskTitleInput";
import PriorityStatusSelect from "./PriorityStatusSelect";
import CategorySelect from "./CategorySelect";
import DatePickers from "./DatePickers";
import ProgressSlider from "./ProgressSlider";
import DescriptionInput from "./DescriptionInput";
import AssigneeSelect from "./AssigneeSelect";

export default function AddTaskModal({ setIsOpen }: any) {
  const { employees, fetchEmployee } = useContext(EmployeeContext);
  const [employeeId, setEmployeeId] = useState<string>();
  const [formData, setFormData] = useState(() => ({
    title: "",
    assignee: "",
    priority: "Low",
    status: "Not Started",
    category: "",
    startDate: "",
    dueDate: "",
    progress: 0,
    description: "",
  }));

  const handleEmployeeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    setEmployeeId(selectedId);

    // find the employee object by id
    const selectedEmployee = employees.find(
      (emp) => String(emp._id) === selectedId
    );

    // update the formData with the employee's name
    setFormData({
      ...formData,
      assignee: selectedEmployee ? selectedEmployee.name : "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:3000/employees/add-task/${employeeId}`,
        formData
      );

      if (!res) {
        return alert("Failed to add task");
      }

      setFormData({
        title: "",
        assignee: "",
        priority: "Low",
        status: "Not Started",
        category: "",
        startDate: "",
        dueDate: "",
        progress: 0,
        description: "",
      });
      fetchEmployee();
      setIsOpen(false);
      setEmployeeId("");
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  console.log(employeeId)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm w-full max-w-lg max-h-[90vh] overflow-y-auto scrollable">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-slate-100">Edit Task</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Title */}
          <TaskTitleInput formData={formData} setFormData={setFormData} />
          {/* Assignee Dropdown */}
          <AssigneeSelect
            employees={employees}
            employeeId={employeeId}
            handleEmployeeChange={handleEmployeeChange}
          />
          {/* Priority & Status Group */}
          <PriorityStatusSelect formData={formData} setFormData={setFormData} />
          {/* Category */}
          <CategorySelect formData={formData} setFormData={setFormData} />
          {/* Start Date & Due Date Group */}
          <DatePickers formData={formData} setFormData={setFormData} />
          {/* Progress */}
          <ProgressSlider formData={formData} setFormData={setFormData} />
          {/* Description */}
          <DescriptionInput formData={formData} setFormData={setFormData} />

          {/* Buttons */}
          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="px-4 py-2 text-slate-400 hover:text-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
