import _ from "lodash";
import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ error: "User not found" });

    res
      .status(200)
      .json({ user: _.omit(user.toObject(), ["_id", "password", "__v"]) });
  } catch (error) {
    res.status(400).json({ error });
  }
};
