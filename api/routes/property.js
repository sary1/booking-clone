import express from "express";
const router = express.Router();

import {
  getAllProperties,
  createProperty,
  getCityProperties,
  getTypeProperties,
  getScoreProperties,
  addNewEntry,
} from "../controllers/property.js";

router.get("/", getAllProperties);
router.get("/getByCity", getCityProperties);
router.get("/getByType", getTypeProperties);
router.get("/getByScore", getScoreProperties);
router.post("/", createProperty);
router.put("/sary", addNewEntry);

export default router;
