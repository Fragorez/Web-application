import { $authHost, $host } from "./index";

export const createEmployee = async (employee) => {
  const { data } = await $authHost.post("api/employee", employee);
  return data;
};

export const fetchEmployees = async () => {
  const { data } = await $host.get("api/employee");
  return data;
};
