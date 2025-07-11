const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  prodid: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);