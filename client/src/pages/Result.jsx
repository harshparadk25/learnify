import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Result = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const { data } = await api.get(`/result/${id}`);
        setResult(data.result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchResult();
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading result...</p>;
  if (!result) return <p className="text-center mt-20">Result not found</p>;

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      {/* Score Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-xl mx-auto mb-8"
      >
        <Card className="text-center shadow-lg">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-bold text-indigo-600">
              Quiz Result 🎉
            </h2>
            <p className="text-4xl font-extrabold">{result.score}%</p>
            <p className="text-slate-600">
              {result.correctCount} / {result.totalQuestions} correct
            </p>

            <Button
              onClick={() => navigate("/")}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Question Review */}
      <div className="max-w-3xl mx-auto space-y-4">
        {result.answers.map((item, i) => (
          <Card key={i}>
            <CardContent className="p-4 space-y-1">
              <p className="font-semibold">
                Q{i + 1}. {item.question}
              </p>

              <p
                className={`font-medium ${
                  item.isCorrect ? "text-emerald-600" : "text-red-500"
                }`}
              >
                Your Answer: {item.selectedAnswer || "Not Answered"}
              </p>

              {!item.isCorrect && (
                <p className="text-slate-600">
                  Correct Answer: {item.correctAnswer}
                </p>
              )}

              {item.explanation && (
                <p className="text-sm text-slate-500 mt-1">
                  Explanation: {item.explanation}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Result;
