/// need to create offer controller 1stconst express = require('express');
const router = express.Router();
const { createOffer, getOffersForOwner } = require('./offer.controller');

router.post('/create', createOffer);

// Get all offers for a specific owner
router.get('/owner/:owner_id', getOffersForOwner);

module.exports = router;