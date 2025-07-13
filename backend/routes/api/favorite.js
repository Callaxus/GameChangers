const express = require('express');
const router = express.Router();
const favoriteController = require('../../api/favorite/favorite.controller');
const auth = require('../../api/auth/auth.middleware'); // Protect all routes

// Add a post to favorites
router.post('/', auth, favoriteController.addFavorite);

// Get all favorites for the logged-in user
router.get('/', auth, favoriteController.getFavorites);

// Remove a post from favorites
router.delete('/:postId', auth, favoriteController.removeFavorite);

module.exports = router;
