import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";

const Quiz = () => {
  const { subject } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const { data } = await api.get(`/quiz/${subject}`);
        setQuiz(data.quiz);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [subject]);

  if (loading) return <p className="text-center mt-20">Loading quiz...</p>;
  if (!quiz) return <p className="text-center mt-20">Quiz not found</p>;

  const questions = quiz.questions;
  const currentQuestion = questions[currentIndex];

  const progress = ((currentIndex + 1) / questions.length) * 100;

  const selectOption = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: option,
    }));
  };

  const previousQuestion = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};


  const nextQuestion = async () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      
      const payload = {
        quizId: quiz._id,
        answers,
      };

      const { data } = await api.post("/result/submit", payload);
      navigate(`/result/${data.resultId}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-6">
        <p className="text-sm text-slate-500 mb-2">
          {quiz.subject} • Question {currentIndex + 1} of {questions.length}
        </p>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="shadow-lg">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-lg font-semibold">
                {currentQuestion.question}
              </h2>

              <div className="space-y-3">
                {currentQuestion.options.map((opt) => (
                  <motion.div
                    key={opt}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => selectOption(opt)}
                    className={`p-4 rounded-lg border cursor-pointer transition
                      ${
                        answers[currentIndex] === opt
                          ? "border-indigo-600 bg-indigo-50"
                          : "hover:border-slate-400"
                      }`}
                  >
                    {opt}
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-between">
  {/* Previous Button */}
  <Button
    variant="outline"
    onClick={previousQuestion}
    disabled={currentIndex === 0}
  >
    Previous
  </Button>

  {/* Next / Submit Button */}
  <Button
    disabled={!answers[currentIndex]}
    onClick={nextQuestion}
    className="bg-indigo-600 hover:bg-indigo-700"
  >
    {currentIndex === questions.length - 1
      ? "Submit Quiz"
      : "Next"}
  </Button>
</div>

            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
