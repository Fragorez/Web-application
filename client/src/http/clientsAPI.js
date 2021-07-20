import { $authHost, $host } from "./index";

export const createClient = async (client) => {
  const { data } = await $host.post("api/client", client);
  return data;
};

export const fetchClients = async () => {
  const { data } = await $authHost.get("api/client");
  return data;
};
