import express from "express";
const router = express.Router();

import { getUser } from "../controllers/user.js";

router.get("/:id", getUser);

export default router;
