import React, { useEffect } from "react";
import { useUser } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const UserAuth = ({ children }) => {
  const navigate = useNavigate();

  const { user } = useUser();
  console.log(user);
  const token = localStorage.getItem("authToken");
  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
    if (!token) {
      navigate("/auth");
    }
  }, []);
  return <>{children}</>;
};

export default UserAuth;
