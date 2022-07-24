import express from "express";
const router = express.Router();

import { getAllProperties, createProperty } from "../controllers/property.js";

router.get("/", getAllProperties);
router.post("/", createProperty);

export default router;
