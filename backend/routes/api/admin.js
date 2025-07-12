const express = require('express');
const router = express.Router();
const adminController = require('../../api/admin/admin.controller');
const authMiddleware = require('../../api/auth/auth.middleware');
const adminMiddleware = require('../../api/admin/admin.middleware');

// User management
router.get('/users', authMiddleware, adminMiddleware, adminController.getAllUsers);
router.delete('/users/:id', authMiddleware, adminMiddleware, adminController.deleteUser);

// Post management
router.get('/posts', authMiddleware, adminMiddleware, adminController.getAllPosts);
router.delete('/posts/:id', authMiddleware, adminMiddleware, adminController.deletePost);

// Report management
router.get('/reports', authMiddleware, adminMiddleware, adminController.getAllReports);
router.put('/reports/:id', authMiddleware, adminMiddleware, adminController.resolveReport);

module.exports = router;
