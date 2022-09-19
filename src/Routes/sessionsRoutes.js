import express from "express";
import { deleteSessions } from "../Controllers/sessionsControllers.js";
import { hasUser } from "../Middlewares/hasUser.js";

const sessionsRoutes = express.Router();
sessionsRoutes.delete("/session", hasUser, deleteSessions);

export default sessionsRoutes;
