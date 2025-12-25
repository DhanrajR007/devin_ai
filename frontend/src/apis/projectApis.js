import axiosInstance from "./axiosInstance";

export const createProject = async (name) => {
  const token = localStorage.getItem("authToken");
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

  const response = await axiosInstance.post("project/create", { name }, config);
  return response.data;
};

export const getAllProjects = async () => {
  const token = localStorage.getItem("authToken");
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

  const response = await axiosInstance.get("/project/all", config);
  return response.data;
};
export const getProjectById = async (projectId) => {
  const token = localStorage.getItem("authToken");
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

  const response = await axiosInstance.get(`/project/${projectId}`, config);
  return response.data;
};
