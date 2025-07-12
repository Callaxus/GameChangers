const express = require('express');
const router = express.Router();
const favoriteController = require('../../api/favorite/favorite.controller');
const authMiddleware = require('../../api/auth/auth.middleware');

// Add a post to favorites
router.post('/', authMiddleware, favoriteController.addFavorite);

// Get all favorites for the user
router.get('/', authMiddleware, favoriteController.getFavorites);

// Remove a post from favorites
router.delete('/:postId', authMiddleware, favoriteController.removeFavorite);

module.exports = router;
