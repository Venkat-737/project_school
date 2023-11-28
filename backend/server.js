import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import codeRoutes from "./routes/codeRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 7000;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors);

app.use("/api/codes", codeRoutes);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
