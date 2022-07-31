import User from "../models/User.js";

export const login = (req, res) => {
  res.status(200).json({ page: "login page" });
};

export const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};
