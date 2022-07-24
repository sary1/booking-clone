import express from "express";
const router = express.Router();

import { getAllProperties } from "../controllers/property.js";

router.get("/", getAllProperties);

export default router;
