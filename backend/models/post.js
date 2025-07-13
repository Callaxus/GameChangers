const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  postid: { type: Number, required: true, unique: true },
  user_id: { type: String, required: true },
  price: { type: Number, required: true },
  for_trade: { type: Boolean, required: true },
  prod_local: { type: String, required: true },
  status: { type: String, required: true },
  product: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    images: [String]
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);