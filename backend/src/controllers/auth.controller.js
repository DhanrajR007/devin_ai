import { registerUser } from "../service/user.service.js";

export const register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    const user = await registerUser(email, password);
    return res
      .status(201)
      .json({ message: "User registered successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "User registration failed" });
  }
};
