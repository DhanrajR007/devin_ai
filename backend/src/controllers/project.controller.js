import {
  addUserToProject,
  createProject,
  getProjects,
} from "../service/project.service.js";

export const createProjectController = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  const user = req.user;
  console.log(user);
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const project = await createProject(name, user);
    return res.status(201).json({ project });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getProjectsController = async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const projects = await getProjects(user);
    return res.status(200).json({ projects });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const addUserToProjectController = async (req, res) => {
  const { projectId } = req.body;
  if (!projectId) {
    return res.status(400).json({ message: "Project ID is required" });
  }
  const { users } = req.body;
  if (!users) {
    return res.status(400).json({ message: "Users is required" });
  }

  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const project = await addUserToProject(projectId, users, user);

    return res.status(200).json({ project });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
