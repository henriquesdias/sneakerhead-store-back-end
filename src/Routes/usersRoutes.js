import express from "express";
import { signUp, signIn } from "../Controllers/usersControllers.js";
const usersRoutes = express.Router();

usersRoutes.post("/sign-up", signUp);
usersRoutes.post("/sign-in", signIn);

export default usersRoutes;
