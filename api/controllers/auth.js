import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import _ from "lodash";

const displayErrors = (error) => {
  const validationErrors = [];
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

    const token = user.generateAuthToken();

    res
      .status(200)
      .header("x-auth-token", token)
      .json({
        user: _.omit(user.toObject(), ["_id", "password", "__v"]),
        token,
      });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const register = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    const user = new User({ ...req.body });
    if (user.password.length < 6)
      return res
        .status(400)
        .json({ error: "Password can not be less than 6 characters" });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();

    res
      .status(201)
      .header("x-auth-token", token)
      .json({ user: _.omit(user.toObject(), ["_id", "password", "__v"]) });
  } catch (error) {
    const errors = displayErrors(error);
    res.status(400).json({ error: errors });
  }
};
