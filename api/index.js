import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// MIDDLEWARES
app.use(express.json());

// ROUTES
app.get("/", (req, res) => res.send("Hi there"));

// RUNNING THE BACKEND
const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
