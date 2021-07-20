import { $authHost, $host } from "./index";

export const createRecord = async (record) => {
  const { data } = await $host.post("api/records", record);
  return data;
};

export const fetchRecords = async () => {
  const { data } = await $authHost.get("api/records");
  return data;
};
