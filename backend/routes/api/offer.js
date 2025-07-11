const express = require('express');
const router = express.Router();
const offerController = require('../../api/offer/offer.controller');

// Route to create a new offer
router.post('/', offerController.createOffer);

// Route to get offers for a specific owner
router.get('/owner/:owner_id', offerController.getOffersForOwner);

module.exports = router;