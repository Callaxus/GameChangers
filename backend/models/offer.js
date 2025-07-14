const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
  offerid: { type: Number, required: true, unique: true },
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  owner_id: { type: String, required: true },
  buyer_id: { type: String, required: true },
  buy_offer: { type: String, required: true },
  status: { type: String, required: true }, // e.g., 'pending', 'accepted', 'rejected'
  notification: { type: Boolean, required: true }
});

module.exports = mongoose.model('Offer', OfferSchema);
