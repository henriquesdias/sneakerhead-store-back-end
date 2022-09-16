import dotenv from "dotenv";
import express from "express";
import usersRoutes from "./Routes/usersRoutes.js";
import productRoutes from "./Routes/productRoutes.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(usersRoutes);
app.use(productRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
