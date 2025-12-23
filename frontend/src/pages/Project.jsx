import React from "react";
import { useLocation } from "react-router-dom";

const Project = () => {
  const location = useLocation();
  const project = location.state?.project;
  return <div></div>;
};

export default Project;
