import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/myrouters.js";

const app = express();

app.use(express.json());
app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  console.log("Server is running");
  res.send("server is running!");
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  0;
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
