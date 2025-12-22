import { createProject } from "../service/project.service.js";

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
