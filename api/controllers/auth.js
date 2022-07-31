import User from "../models/User.js";
import bcrypt from "bcrypt";

const displayErrors = (error) => {
  const validationErrors = [];
  if (error.code === 11000) return "Email is already registered";
  Object.values(error.errors).forEach(({ properties }) => {
    validationErrors.push(properties.message);
  });
  return validationErrors;
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ error: "User not found" });
    if (!req.body.password)
      return res.status(400).json({ error: "Please provide your password" });

    const validatePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validatePassword)
      return res.status(400).json({ error: "Invalid Password" });

    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const register = async (req, res) => {
  try {
    const user = new User({ ...req.body });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    res.status(201).json({ user });
  } catch (error) {
    const errors = displayErrors(error);
    res.status(400).json({ errors });
  }
};
