const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Application = require('../models/Application');

router.post('/', authMiddleware, async (req, res) => {
  try {
    const application = new Application({
      userId: req.user.id,
      ...req.body,
    });
    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const applications = await Application.find({ userId: req.user.id });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;