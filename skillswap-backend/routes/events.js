// routes/events.js
const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');
const { upload } = require('../config/cloudinary');

router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const educator = await User.findById(req.user.id).select('name');
    if (!educator) {
      return res.status(404).json({ message: 'Educator not found' });
    }

    const eventData = {
      ...req.body,
      educatorId: req.user.id,
      educatorName: educator.name,
    };

    if (req.file) {
      eventData.image = req.file.path;
    }

    const event = new Event(eventData);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/my-events', authMiddleware, async (req, res) => {
  try {
    const events = await Event.find({ educatorId: req.user.id }).sort({ date: -1 });
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const { type } = req.query;
    let query = {};
    if (type) {
      query.type = type;
    }
    const events = await Event.find(query).sort({ date: 1 });
    res.json(events);
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;





