import express from "express";

import { readProducts, createProducts } from "../Controllers/productControllers.js";
const productRoutes = express.Router();

productRoutes.post("/products", createProducts); //external only, unknown to frontend, adds products to database 
productRoutes.get("/products", readProducts);

export default productRoutes;