import { configDotenv } from "dotenv";
configDotenv();
import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.end("from server");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
