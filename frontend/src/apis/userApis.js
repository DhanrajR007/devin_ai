import axiosInstance from "./axiosInstance";

export const loginUser = (email, password) => {
  const user = axiosInstance.post("/auth/login", { email, password });
  return user;
};

export const registerUser = (email, password) => {
  const user = axiosInstance.post("/auth/register", { email, password });
  return user;
};

export const logoutUser = () => {
  const user = axiosInstance.get("/auth/logout");
  return user;
};

export const getUser = () => {
  const user = axiosInstance.get("/auth/getUser");
  return user;
};
