const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { emailOrPhone, password, role, name } = req.body; // Add name
  try {
    let user = await User.findOne({ emailOrPhone });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    user = new User({
      emailOrPhone,
      password: await bcrypt.hash(password, 10),
      role,
      name, // Add name
    });
    await user.save();

    const payload = { id: user._id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, id: user._id, role: user.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { emailOrPhone, password } = req.body;
  try {
    const user = await User.findOne({ emailOrPhone });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const payload = { id: user._id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, id: user._id, role: user.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;