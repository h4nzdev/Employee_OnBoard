import { X } from "lucide-react";
import { useContext, useState } from "react";
import ClientContext from "../../../context/ClientContext";
import axios from "axios";
import AddRequirementsPriorityStatus from "./AddRequirementsPriorityStatus";
import AddRequirementsType from "./AddRequirementsType";
import AddRequirementsTitle from "./AddRequirementsTitle";
import AddRequirementsDueSubmittedDate from "./AddRequirementsDueSubmittedDate";
import AddRequirementsDescription from "./AddRequirementsDescription";
import AddRequirementName from "./AddRequirementName";
import Swal from "sweetalert2";

export default function AddRequirementsModal({ setIsOpen }: any) {
  const { client, fetchClients } = useContext(ClientContext);
  const [clientId, setClientId] = useState<string>();
  const approveClient = client.filter((c) => c.status === "Approve");
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    priority: "",
    status: "",
    type: "",
    dueDate: "",
    submittedDate: "",
    description: "",
  });

  // ✅ Cleaner function for handling client selection
  const handleClientChange = (id: string) => {
    const selected = client.find((c) => c._id === id);
    setClientId(id);
    setFormData({
      ...formData,
      name: selected ? selected.name : "",
    });
  };

  const handleSubmitRequirements = async (e: any) => {
    e.preventDefault();

    if (!clientId) {
      return alert("Please add select client");
    }

    try {
      const res = await axios.post(
        `http://localhost:3000/client/add-requirements/${clientId}`,
        { requirements: formData }
      );
      if (!res) {
        return console.log("Error to add the data");
      }
      setFormData({
        title: "",
        name: "",
        priority: "",
        status: "",
        type: "",
        dueDate: "",
        submittedDate: "",
        description: "",
      });

      Swal.fire({
        title: "New Message",
        text: "Requirement added successfully.",
        icon: "info", // optional: "success", "error", "warning"
        background: "#1e293b", // slate-800
        color: "#f1f5f9", // text color
        confirmButtonColor: "#0f172a", // slate-900
        confirmButtonText: "Close",
      });

      setIsOpen(false);
      setClientId(undefined);
      fetchClients();
      console.log(formData);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-slate-100">Add Requirement</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmitRequirements} className="p-6">
          <div className="space-y-4">
            {/* Title */}
            <AddRequirementsTitle
              formData={formData}
              setFormData={setFormData}
            />

            {/* Name */}
            <AddRequirementName
              clientId={clientId}
              handleClientChange={handleClientChange}
              approveClient={approveClient}
            />

            {/* Priority and Status Row */}
            <AddRequirementsPriorityStatus
              formData={formData}
              setFormData={setFormData}
            />

            {/* Type */}
            <AddRequirementsType
              formData={formData}
              setFormData={setFormData}
            />

            {/*Submitted & Due Date */}
            <AddRequirementsDueSubmittedDate
              formData={formData}
              setFormData={setFormData}
            />

            {/* Description */}
            <AddRequirementsDescription
              formData={formData}
              setFormData={setFormData}
            />
          </div>

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
