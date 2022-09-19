import { finalizePurchase } from "../Controllers/storeSalesControllers.js";
import { hasUser } from "../Middlewares/hasUser.js";
import express from "express";

const storeSalesRoutes = express.Router();

storeSalesRoutes.post("/store-sales", hasUser, finalizePurchase);

export default storeSalesRoutes;
