const Offer = require('../../models/offer');

exports.createOffer = async (req, res) => {
  try {
    const { _id, post_id, owner_id, buyer_id, buy_offer, status, notification } = req.body;
    const newOffer = new Offer({ _id, post_id, owner_id, buyer_id, buy_offer, status, notification });
    await newOffer.save();
    res.status(201).json(newOffer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOffersForOwner = async (req, res) => {
  try {
    const { owner_id } = req.params;
    const offers = await Offer.find({ owner_id });
    res.json(offers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};