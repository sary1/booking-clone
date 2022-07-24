import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import propertyRouter from "./routes/property.js";

const app = express();
dotenv.config();

// DATABASE
await mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Database connected .. Booking"))
  .catch((err) => console.log(err));

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api/properties", propertyRouter);

// RUNNING THE BACKEND
const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
