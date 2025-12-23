import axiosInstance from "./axiosInstance";

export const loginUser = async (email, password) => {
  const user = await axiosInstance.post("/auth/login", { email, password });
  return user;
};

export const registerUser = async (email, password) => {
  const user = await axiosInstance.post("/auth/register", { email, password });
  return user;
};

export const logoutUser = async () => {
  const user = await axiosInstance.get("/auth/logout");
  return user;
};

export const getUser = async () => {
  const user = await axiosInstance.get("/auth/me");
  return user;
};
