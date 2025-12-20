import mongoose from "mongoose";


const answerSchema = new mongoose.Schema({
    question:String,
    selectedAnswer:String,
    correctAnswer:String,
    isCorrect:Boolean,
    explanation:String,
});

const resultSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    quizId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Quiz',
        required:true
    },
    score:Number,
    totalQuestions:Number,
    correctAnswers:Number,
    wrongAnswers:Number,
    answers:[answerSchema]
},{timestamps:true});


export const Result = mongoose.model('Result',resultSchema);