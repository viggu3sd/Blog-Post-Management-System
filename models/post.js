const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [String],
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  createdAt: { type: Date, default: Date.now }
});

// Add text index for search
postSchema.index({
  title: 'text',
  content: 'text',
  tags: 'text'
});

module.exports = mongoose.model('Post', postSchema);