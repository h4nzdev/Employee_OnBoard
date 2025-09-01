import { CheckCircle, XCircle } from "lucide-react";
import { useContext, useState } from "react";
import ClientContext from "../../../../context/ClientContext";
import axios from "axios";

const HRPendingClientTableBody = () => {
  const { client, fetchClients } = useContext(ClientContext);
  const pendingClient = client.filter((c) => c.status === "Pending");

  const handleSubmit = async (id: string, newStatus: string) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/client/update-client/${id}`,
        { status: newStatus }
      );
      console.log(res.data);
      fetchClients();
      alert(`Client ${newStatus === "Approve" ? "Approve" : "Reject"}`);
    } catch (error) {
      console.error("Server error");
    }
  };

  return (
    <tbody className="divide-y divide-slate-800">
      {pendingClient.length === 0 ? (
        <td className="px-6 py-4 whitespace-nowrap text-xl">No client found</td>
      ) : (
        <>
          {pendingClient.map((client: any) => (
            <tr className="hover:bg-slate-800">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">JD</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-slate-100">
                      {client.name}
                    </div>
                    <div className="text-sm text-slate-400">{client.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                {client.type || "New Registration"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 bg-yellow-900 text-yellow-300 text-xs font-medium rounded-full">
                  {client.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 bg-red-900 text-red-300 text-xs font-medium rounded-full">
                  High
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                {client.createdAt.slice(1, 10)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                <button
                  type="button"
                  className="text-green-400 hover:text-green-300"
                >
                  <CheckCircle
                    onClick={() => handleSubmit(client._id, "Approve")}
                    className="w-4 h-4"
                  />
                </button>
                <button
                  type="button"
                  className="text-red-400 hover:text-red-300"
                >
                  <XCircle
                    onClick={() => handleSubmit(client._id, "Reject")}
                    className="w-4 h-4"
                  />
                </button>
              </td>
            </tr>
          ))}
        </>
      )}
    </tbody>
  );
};

export default HRPendingClientTableBody;
