import { $authHost, $host } from "./index";

export const createService = async (service) => {
  const { data } = await $authHost.post("api/service", service);
  return data;
};

export const fetchServices = async () => {
  const { data } = await $host.get("api/service");
  return data;
};
