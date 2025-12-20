import express from "express";
import { getQuizBySubject } from "../controllers/quizController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:subject", authMiddleware, getQuizBySubject);

export default router;
