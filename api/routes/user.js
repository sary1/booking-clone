import express from "express";
const router = express.Router();

import { getUser } from "../controllers/user.js";
import { auth } from "../middleware/auth.js";

router.get("/:id", auth, getUser);

export default router;
