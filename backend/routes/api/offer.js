const express = require('express');
const router = express.Router();
const offerController = require('../../api/offer/offer.controller');
const authMiddleware = require('../../api/auth/auth.middleware');

// Create a new offer (protected)
router.post('/', authMiddleware, offerController.createOffer);

// Get all offers for a specific owner (protected)
router.get('/owner/:owner_id', authMiddleware, offerController.getOffersForOwner);

// Get all offers for a specific buyer (protected)
router.get('/buyer/:buyer_id', authMiddleware, offerController.getOffersForBuyer);

// Get a single offer by ID (protected)
router.get('/:id', authMiddleware, offerController.getOfferById);

// Update an offer (accept/reject) (protected)
router.put('/:id', authMiddleware, offerController.updateOffer);

// Delete an offer (protected)
router.delete('/:id', authMiddleware, offerController.deleteOffer);

module.exports = router;