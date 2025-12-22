import Project from "../model/project.model.js";
import { getUserByEmail } from "../dao/user.dao.js";
import { validateProjectId } from "../dao/validate.js";

export const createProject = async (name, user) => {
  try {
    const getUser = await getUserByEmail(user.email);
    if (!getUser) {
      throw new Error("User not found");
    }
    const project = await Project.create({ name, users: [getUser._id] });
    return project;
  } catch (error) {
    throw error;
  }
};

export const getProjects = async (user) => {
  try {
    const getUser = await getUserByEmail(user.email);
    if (!getUser) {
      throw new Error("User not found");
    }
    const projects = await Project.find({ users: getUser._id });
    return projects;
  } catch (error) {
    throw error;
  }
};

export const addUserToProject = async (projectId, users, user) => {
  const validate = validateProjectId(projectId, users);
  if (!validate) {
    throw new Error("Invalid project ID");
  }
  try {
    const getUser = await getUserByEmail(user.email);
    if (!getUser) {
      throw new Error("User not found");
    }
    const project = await Project.findById({
      _id: projectId,
      users: getUser._id,
    });
    if (!project) {
      throw new Error("Project not found");
    }

    const updatedProject = await Project.findOneAndUpdate(
      {
        _id: projectId,
      },
      {
        $addToSet: {
          users: {
            $each: users,
          },
        },
      },
      {
        new: true,
      }
    );

    return updatedProject;
    // project.users.push(...users);
    // await project.save();
    return project;
  } catch (error) {
    throw error;
  }
};
