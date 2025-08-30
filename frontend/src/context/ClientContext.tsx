import { createContext, useEffect, useState, type ReactNode } from "react";
import axios from "axios";
import type { Client } from "../types/client";

type ClientContextType = {
  client: Client[];
  setClient: React.Dispatch<React.SetStateAction<Client[]>>;
  fetchClients: () => Promise<void>;
  loading: boolean;
};

const ClientContext = createContext<ClientContextType>({
  client: [],
  setClient: () => {},
  fetchClients: async () => {},
  loading: false,
});

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  const [client, setClient] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchClients = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/client/get-clients");
      setClient(res.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  console.log(client)

  return (
    <ClientContext.Provider
      value={{ client, setClient, fetchClients, loading }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientContext;
