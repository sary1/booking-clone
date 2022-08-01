export const admin = (req, res, next) => {
  console.log(req);
  if (!req.user.isAdmin)
    return res.status(403).json({ error: "Forbidden Access" });
  next();
};
