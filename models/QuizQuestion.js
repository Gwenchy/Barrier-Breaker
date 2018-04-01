const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizQuestion = new Schema({
    question: String,
    answers: [String],
    correctAnswer: String,
    diffiqulty: Number,
    language: String
});


module.exports = mongoose.model('QuizQuestion', QuizQuestion);