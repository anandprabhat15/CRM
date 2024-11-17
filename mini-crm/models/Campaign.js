// models/Campaign.js
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: String,
  targetAudience: Object,
  createdAt: { type: Date, default: Date.now },
  sentCount: Number,
  failedCount: Number,
});

module.exports = mongoose.model('Campaign', campaignSchema);
