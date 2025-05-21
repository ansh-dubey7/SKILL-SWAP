const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  link: { type: String, required: true },
  type: { type: String, enum: ['live', 'upcoming'], default: 'live' },
  educatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  educatorName: { type: String, required: true },
  image: { type: String },
});

module.exports = mongoose.model('Event', eventSchema);