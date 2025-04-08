// models/QuizSubmission.js
const mongoose = require('mongoose');

const quizSubmissionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  answers: [{ type: Number }], // Array of selected answers
  score: { type: Number, required: true },
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('QuizSubmission', quizSubmissionSchema);