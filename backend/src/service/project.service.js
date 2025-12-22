export const createProject = async (name, userId) => {
  try {
    const project = await Project.create({ name, users: [userId] });
    return project;
  } catch (error) {
    throw error;
  }
};
