import { $authHost } from "./index";

export const createPosition = async (position) => {
  const { data } = await $authHost.post("api/position", position);
  return data;
};

export const fetchPositions = async () => {
  const { data } = await $authHost.get("api/position");
  console.log(data);
  return data;
};
