const express = require('express');
const router = express.Router();
const adminController = require('../../api/admin/admin.controller');
const auth = require('../../api/auth/auth.middleware');
const adminOnly = require('../../api/admin/admin.middleware'); // Protect admin routes

// User management
router.get('/users', auth, adminOnly, adminController.getAllUsers);
router.delete('/users/:id', auth, adminOnly, adminController.deleteUser);

// Post management
router.get('/posts', auth, adminOnly, adminController.getAllPosts);
router.delete('/posts/:id', auth, adminOnly, adminController.deletePost);

// Report management
router.get('/reports', auth, adminOnly, adminController.getAllReports);
router.put('/reports/:id/resolve', auth, adminOnly, adminController.resolveReport);

module.exports = router;
