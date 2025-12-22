export const createProjectController = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  console.log(req.user.email);
  return res.status(200).json({ message: "Project created successfully" });
  try {
  } catch (error) {}
};
