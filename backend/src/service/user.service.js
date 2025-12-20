import User from "../model/user.model.js";

export const registerUser = async (email, password) => {
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    throw new Error("User already exists");
  }
  try {
    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password });
    return user;
  } catch (error) {
    throw new Error("User registration failed");
  }
};
