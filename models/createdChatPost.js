const mongoose = require('mongoose');

const createdChatPost = new mongoose.Schema({
  creatorID: String,
  topic: String,
  description: String,
  category: String,
  date: String,
  time: String,
  createdAt: Date,
  participantID: String,
  guest: [],
  chosen: {type: Boolean, default: false},
  duration: String,
  newDate: String,
  bMonth: Number,
  cronTime: String,
  cronDestroyTime: String,
});



module.exports = mongoose.model('CreatedChatPost', createdChatPost);
