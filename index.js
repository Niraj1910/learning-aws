import { configDotenv } from "dotenv";
configDotenv();
import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.end("from server");
});

app.get("/test", (req, res) => {
  const result = add(10, 15);
  res.end("testing...  " + result);
});

function add(a, b) {
  return a + b;
}

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
