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

// DIRECT ALL UNHANDLED ROUTES
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

// RUNNING THE BACKEND
const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
