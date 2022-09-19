import { finalizePurchase } from "../Controllers/storeSalesControllers.js";
import express from "express";

const storeSalesRoutes = express.Router();

storeSalesRoutes.post("/store-sales", finalizePurchase);

export default storeSalesRoutes;
