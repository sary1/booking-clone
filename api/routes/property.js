import express from "express";
const router = express.Router();

import {
  getAllProperties,
  createProperty,
  getCityProperties,
} from "../controllers/property.js";

router.get("/", getAllProperties);
router.get("/countByCity", getCityProperties);
router.post("/", createProperty);

export default router;
