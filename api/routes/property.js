import express from "express";
const router = express.Router();

import {
  getAllProperties,
  createProperty,
  getCityProperties,
  getTypeProperties,
} from "../controllers/property.js";

router.get("/", getAllProperties);
router.get("/getByCity", getCityProperties);
router.get("/getByType", getTypeProperties);
router.post("/", createProperty);

export default router;
