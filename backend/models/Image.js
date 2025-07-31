const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  sourceUrl: String,
  imageUrl: String,
  size: Number,
  mimeType: String,
  status: { type: String, default: 'processing' },
});

module.exports = mongoose.model('Image', imageSchema);
