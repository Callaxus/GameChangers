const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  _id: { type: Number, required: true, unique: true },
  user_id: { type: String, required: true },
  product_id: { type: Number, required: true },
  price: { type: Number, required: true },
  for_trade: { type: Boolean, required: true },
  prod_local: { type: String, required: true },
  status: { type: String, required: true } // Add this line
});

module.exports = mongoose.model('Post', PostSchema);