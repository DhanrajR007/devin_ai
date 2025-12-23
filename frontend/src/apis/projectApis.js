import axiosInstance from "./axiosInstance";

export const createProject = async (name) => {
  const token = localStorage.getItem("authToken");
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

  const response = await axiosInstance.post(
    "/projects/create",
    { name },
    config
  );
  return response.data;
};

export const getAllProjects = async () => {
  const token = localStorage.getItem("authToken");
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

  const response = await axiosInstance.get("/projects/all", config);
  return response.data;
};
