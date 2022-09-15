import express from "express";
import { signUp } from "../Controllers/usersControllers.js";
const usersRoutes = express.Router();

usersRoutes.post("/sign-up", signUp);

export default usersRoutes;
