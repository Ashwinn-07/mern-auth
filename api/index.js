import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/user.route.js";

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("database connected"))
  .catch((err) => console.log("error connecting to database"));

const app = express();

app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("server up!");
});
