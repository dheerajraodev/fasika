import express from "express";
import cors from "cors";
import morgan from "morgan";
import gemstoneRouter from "./routes/Gemsstone.js";
import { conn } from "./db/conn.js";

const app = express();
const PORT = process.env.PORT || 4000;

conn();

app.use(morgan("dev"));
app.use(express.json());

app.use("/gemstone", gemstoneRouter);

app.get("/", (req, res) => {
  res.send("welcome to the API");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
