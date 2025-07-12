const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    }
  },
  {
    timestamps: true // adds createdAt and updatedAt
  }
);

favoriteSchema.index({ userId: 1, postId: 1 }, { unique: true }); // Prevent duplicates

module.exports = mongoose.model('Favorite', favoriteSchema);
