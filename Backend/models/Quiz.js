// models/Quiz.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }], // Array of 4 options
  correctAnswer: { type: Number, required: true }, // Index of correct option (0-3)
});

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true }, // e.g., "Web Development Basics"
  description: { type: String, required: true },
  category: { type: String, required: true }, // e.g., "Web Development", "Aptitude"
  questions: [questionSchema], // Array of 10 questions
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Quiz', quizSchema);