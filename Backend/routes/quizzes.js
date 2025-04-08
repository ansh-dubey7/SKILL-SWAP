// routes/quizzes.js
const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');
const QuizSubmission = require('../models/QuizSubmission'); // We'll create this next
const authMiddleware = require('../middleware/auth');

// Get all quizzes (public for learners)
router.get('/', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit quiz answers and calculate score
router.post('/:id/submit', authMiddleware, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    const { answers } = req.body; // Array of selected answer indices
    let score = 0;
    quiz.questions.forEach((q, idx) => {
      if (q.correctAnswer === answers[idx]) score++;
    });

    const submission = new QuizSubmission({
      userId: req.user.id,
      quizId: req.params.id,
      answers,
      score,
    });
    await submission.save();

    res.json({ score, total: quiz.questions.length });
  } catch (error) {
    console.error('Error submitting quiz:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;