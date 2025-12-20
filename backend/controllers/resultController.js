import Quiz from "../models/Quiz.js";
import { Result } from "../models/Result.js";

export const submitQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body;

    if (!quizId || !answers) {
      return res.status(400).json({
        success: false,
        message: "quizId and answers are required"
      });
    }

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found"
      });
    }

    let correctCount = 0;

    const detailedAnswers = quiz.questions.map((q, index) => {
      const selectedAnswer = answers[index];
      const isCorrect = selectedAnswer === q.correctAnswer;

      if (isCorrect) correctCount++;

      return {
        question: q.question,
        selectedAnswer,
        correctAnswer: q.correctAnswer,
        isCorrect,
        explanation: q.explanation
      };
    });

    const result = await Result.create({
      userId: req.user.id,
      quizId,
      score: correctCount,
      totalQuestions: quiz.questions.length,
      correctAnswers: correctCount,
      wrongAnswers: quiz.questions.length - correctCount,
      answers: detailedAnswers
    });

    res.status(201).json({
      success: true,
      message: "Quiz submitted successfully",
      resultId: result._id
    });

  } catch (error) {
    console.error("SUBMIT QUIZ ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

export const getResultById = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Result not found"
      });
    }

    res.status(200).json({
      success: true,
      result
    });
  } catch (error) {
    console.error("GET RESULT ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
