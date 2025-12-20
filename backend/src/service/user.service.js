import User from "../model/user.model.js";

export const registerUser = async (email, password) => {
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    throw new Error("User already exists");
  }
  try {
    const hashedPassword = await User.hashPassword(password);

    const user = await User.create({ email, password: hashedPassword });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("User registration failed");
  }
};
