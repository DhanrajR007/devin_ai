import { getUserByEmail } from "../dao/user.dao.js";
import User from "../model/user.model.js";

export const registerUser = async (email, password) => {
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    throw new Error("User already exists");
  }
  try {
    const hashedPassword = await User.hashPassword(password);

    const user = await User.create({ email, password: hashedPassword });
    const token = await user.generateToken();

    return { user, token };
  } catch (error) {
    console.log(error);
    throw new Error("User registration failed");
  }
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }
  try {
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    const token = await user.generateToken();
    return { user, token };
  } catch (error) {
    console.log(error);
    throw new Error("User login failed");
  }
};
export const allUser = async (user) => {
  try {
    const { id } = await getUserByEmail(user);
    const users = await User.find({
      _id: {
        $ne: id,
      },
    });
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Users fetching failed");
  }
};
