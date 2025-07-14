const Offer = require('../../models/offer');

// Create a new offer
exports.createOffer = async (req, res) => {
  console.log('Incoming Offer req.body:', req.body);
  try {
    const { post_id, owner_id, buy_offer } = req.body;

    if (!post_id || !owner_id || !buy_offer) {
      return res.status(400).json({ msg: 'Missing required fields' });
    }

    // Auto-increment offerid
    const lastOffer = await Offer.findOne().sort({ offerid: -1 });
    const nextOfferId = lastOffer ? lastOffer.offerid + 1 : 1;

    const newOffer = new Offer({
      offerid: nextOfferId,       // 🔥 Fix applied
      post_id,
      owner_id,
      buyer_id: req.user.id,
      buy_offer,
      status: 'pending',
      notification: true
    });

    await newOffer.save();
    res.status(201).json(newOffer);
  } catch (err) {
    console.error('Error creating offer:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Get all offers for a specific owner
exports.getOffersForOwner = async (req, res) => {
  try {
    const { owner_id } = req.params;

    // Allow only the owner themselves to fetch their offers
    if (req.user.id !== owner_id) {
      return res.status(403).json({ msg: 'Unauthorized' });
    }

    const offers = await Offer.find({ owner_id });
    res.json(offers);
  } catch (err) {
    console.error('Error fetching owner offers:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Get all offers for a specific buyer
exports.getOffersForBuyer = async (req, res) => {
  try {
    const { buyer_id } = req.params;

    // Allow only the buyer themselves to fetch their offers
    if (req.user.id !== buyer_id) {
      return res.status(403).json({ msg: 'Unauthorized' });
    }

    const offers = await Offer.find({ buyer_id });
    res.json(offers);
  } catch (err) {
    console.error('Error fetching buyer offers:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Get a single offer by ID
exports.getOfferById = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    if (!offer) return res.status(404).json({ msg: 'Offer not found' });
    res.json(offer);
  } catch (err) {
    console.error('Error fetching offer:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Update an offer (accept/reject)
exports.updateOffer = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    if (!offer) return res.status(404).json({ msg: 'Offer not found' });

    // Only the owner of the post can accept/reject offers
    if (offer.owner_id !== req.user.id) {
      return res.status(403).json({ msg: 'Unauthorized' });
    }

    const updatedOffer = await Offer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    res.json(updatedOffer);
  } catch (err) {
    console.error('Error updating offer:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Delete an offer
exports.deleteOffer = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    if (!offer) return res.status(404).json({ msg: 'Offer not found' });

    // Only the buyer who created the offer can delete it
    if (offer.buyer_id !== req.user.id) {
      return res.status(403).json({ msg: 'Unauthorized' });
    }

    await offer.remove();
    res.json({ msg: 'Offer deleted' });
  } catch (err) {
    console.error('Error deleting offer:', err.message);
    res.status(500).json({ error: err.message });
  }
};


