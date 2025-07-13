const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
const auth = require('./auth.middleware');  // Protect profile routes

// @route   POST /api/auth/register
// @desc    Register new user
// @access  Public
router.post('/register', authController.register);

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', authController.login);

// @route   GET /api/auth/profile
// @desc    Get logged-in user's profile
// @access  Private
router.get('/profile', auth, authController.getProfile);

// @route   PUT /api/auth/profile
// @desc    Update logged-in user's profile
// @access  Private
router.put('/profile', auth, authController.updateProfile);

module.exports = router;