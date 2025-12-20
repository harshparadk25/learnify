import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true,
    validate: v => v.length === 4
  },
  correctAnswer: {
    type: String,
    required: true
  },
  explanation: {
    type: String,
    required: true
  }
});

const quizSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    unique: true
  },
  questions: [questionSchema]
});

export default mongoose.model("Quiz", quizSchema);
