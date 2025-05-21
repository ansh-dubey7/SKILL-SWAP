const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  emailOrPhone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['learner', 'educator'], default: 'learner' },
  createdAt: { type: Date, default: Date.now },
  name: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);