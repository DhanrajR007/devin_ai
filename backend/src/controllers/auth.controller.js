import { loginUser, registerUser, allUser } from "../service/user.service.js";
import redisClient from "../db/redis.client.js";

export const register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    const { user, token } = await registerUser(email, password);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res
      .status(201)
      .json({ message: "User registered successfully", user, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "User registration failed" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    const { user, token } = await loginUser(email, password);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res
      .status(200)
      .json({ message: "User logged in successfully", user, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "User login failed" });
  }
};
export const logout = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({ message: "User not logged in" });
    }
    await redisClient.set(token, "logout", "EX", 60 * 60 * 24);
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "User logout failed" });
  }
};
export const allUsersController = async (req, res) => {
  const user = req.user.email;
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  try {
    const users = await allUser(user);
    return res
      .status(200)
      .json({ message: "Users fetched successfully", users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Users fetching failed" });
  }
};
