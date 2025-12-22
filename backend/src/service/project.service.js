import Project from "../model/project.model.js";
import { getUserByEmail } from "../dao/user.dao.js";

export const createProject = async (name, user) => {
  try {
    const getUser = await getUserByEmail(user.email);
    if (!getUser) {
      return { message: "User not found" };
    }
    const project = await Project.create({ name, users: [getUser._id] });
    return project;
  } catch (error) {
    throw error;
  }
};
