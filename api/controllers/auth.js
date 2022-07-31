import User from "../models/User.js";

const displayErrors = (error) => {
  const validationErrors = [];
  if (error.code === 11000) return "Email is already registered";
  Object.values(error.errors).forEach(({ properties }) => {
    validationErrors.push(properties.message);
  });
  return validationErrors;
};

export const login = (req, res) => {
  res.status(200).json({ page: "login page" });
};

export const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    const errors = displayErrors(error);
    res.status(400).json({ errors });
  }
};
