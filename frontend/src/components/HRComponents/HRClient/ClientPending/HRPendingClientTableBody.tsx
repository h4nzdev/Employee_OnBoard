import { CheckCircle, XCircle } from "lucide-react";
import { useContext, useState } from "react";
import axios from "axios";
import ApplicationContext from "../../../../context/ApplicationContext";
import emailjs from "@emailjs/browser";

const HRPendingApplicationTableBody = () => {
  const { applications, fetchApplications }: any =
    useContext(ApplicationContext);

  const [loadingId, setLoadingId] = useState<string | null>(null); // track which application is loading

  // filter applications that are "Pending"
  const pendingApplications = applications.filter(
    (app: any) => app.status === "Pending"
  );

  const handleSubmit = async (
    id: string,
    newStatus: string,
    applicantEmail: string,
    applicantName: string,
    jobTitle: string
  ) => {
    try {
      setLoadingId(id); // start loader for this application

      // 1️⃣ Update the application status in your backend
      const res = await axios.put(
        `http://localhost:3000/application/update/${id}`,
        { status: newStatus }
      );
      console.log(res.data);

      // 2️⃣ Only send email if approved
      if (newStatus === "Approve") {
        await emailjs.send(
          "service_50vrouu",
          "template_vtergcs",
          {
            name: applicantName,
            email: applicantEmail,
            jobTitle: jobTitle,
          },
          "MnJJTRsFLVayVbcMf"
        );
        alert("Application approved ✅ and email sent!");
      } else {
        alert("Application rejected ❌");
      }

      // 3️⃣ Refresh applications
      fetchApplications();
    } catch (error) {
      console.error("Server error", error);
      alert("Something went wrong 😅");
    } finally {
      setLoadingId(null); // stop loader
    }
  };

  return (
    <tbody className="divide-y divide-slate-800">
      {pendingApplications.length === 0 ? (
        <tr>
          <td
            colSpan={6}
            className="px-6 py-4 whitespace-nowrap text-xl text-center"
          >
            No applications found
          </td>
        </tr>
      ) : (
        pendingApplications.map((application: any) => (
          <tr key={application._id} className="hover:bg-slate-800">
            {/* Avatar + Name + Email */}
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">
                    {application.name?.charAt(0).toUpperCase() || "A"}
                  </span>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-slate-100">
                    {application.name}
                  </div>
                  <div className="text-sm text-slate-400">
                    {application.email}
                  </div>
                </div>
              </div>
            </td>

            {/* Type */}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
              {application.type || "New Application"}
            </td>

            {/* Status */}
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 py-1 bg-yellow-900 text-yellow-300 text-xs font-medium rounded-full">
                {application.status}
              </span>
            </td>

            {/* Priority */}
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 py-1 bg-red-900 text-red-300 text-xs font-medium rounded-full">
                High
              </span>
            </td>

            {/* Created Date */}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
              {application.createdAt
                ? application.createdAt.slice(0, 10)
                : "N/A"}
            </td>

            {/* Action Buttons */}
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 flex">
              <button
                type="button"
                className="text-green-400 hover:text-green-300 flex items-center gap-1"
                onClick={() =>
                  handleSubmit(
                    application._id,
                    "Approve",
                    application.email,
                    application.name,
                    application.jobOffer?.title || "the job"
                  )
                }
                disabled={loadingId === application._id}
              >
                {loadingId === application._id ? (
                  "Processing..."
                ) : (
                  <CheckCircle className="w-4 h-4" />
                )}
              </button>
              <button
                type="button"
                className="text-red-400 hover:text-red-300 flex items-center gap-1"
                onClick={() =>
                  handleSubmit(
                    application._id,
                    "Rejected",
                    application.email,
                    application.name,
                    application.jobOffer?.title || "the job"
                  )
                }
                disabled={loadingId === application._id}
              >
                {loadingId === application._id ? (
                  "Processing..."
                ) : (
                  <XCircle className="w-4 h-4" />
                )}
              </button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};

export default HRPendingApplicationTableBody;
