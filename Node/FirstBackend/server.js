import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();
app.get("/", (req, res) => {
  console.log("Server is running");
  res.send("server is running!");
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
