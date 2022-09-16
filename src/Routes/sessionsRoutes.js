import express from "express";
import { deleteSessions } from "../Controllers/sessionsControllers.js";

const sessionsRoutes = express.Router();
sessionsRoutes.delete("/session", deleteSessions);

export default sessionsRoutes;
