import express from "express";
import {
  submitQuiz,
  getResultById
} from "../controllers/resultController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/submit", authMiddleware, submitQuiz);
router.get("/:id", authMiddleware, getResultById);

export default router;
