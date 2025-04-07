const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Event = require('../models/Event');

router.post('/', authMiddleware, async (req, res) => {
  if (req.user.role !== 'educator') {
    return res.status(403).json({ message: 'Only educators can create events' });
  }

  try {
    const event = new Event({
      educatorId: req.user.id,
      ...req.body,
    });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const events = await Event.find().populate('educatorId', 'emailOrPhone');
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;