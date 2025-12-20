import Quiz from "../models/Quiz.js";

export const getQuizBySubject = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ subject: req.params.subject })
      .select("subject questions.question questions.options");

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found"
      });
    }

    res.status(200).json({
      success: true,
      quiz
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
