import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

// DATABASE
await mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Database connected .. Booking"))
  .catch((err) => console.log(err));

// MIDDLEWARES
app.use(express.json());

// ROUTES
app.get("/", (req, res) => res.send("Hi there"));

// RUNNING THE BACKEND
const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
