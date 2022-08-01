import _ from "lodash";

export const getUser = (req, res) => {
  try {
    const user = req.user;
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({ user: _.pick(user, ["_id", "isAdmin"]) });
  } catch (error) {
    res.status(400).json({ error });
  }
};
