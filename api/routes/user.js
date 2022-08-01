import express from "express";
const router = express.Router();

import { getUser, getAllUsers } from "../controllers/user.js";
import { admin } from "../middleware/admin.js";
import { auth } from "../middleware/auth.js";

router.get("/:id", auth, getUser);
router.get("/", [auth, admin], getAllUsers);

export default router;
