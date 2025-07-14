const express = require('express');
const router = express.Router();
const notificationController = require('../../api/notification/notification.controller');
const authMiddleware = require('../../api/auth/auth.middleware');

// Create a new notification (protected)
router.post('/', authMiddleware, notificationController.createNotification);

// Get all notifications for the authenticated user (protected)
router.get('/', authMiddleware, notificationController.getNotifications);

// Mark a notification as read (protected)
router.put('/:id/read', authMiddleware, notificationController.markAsRead);

// Delete a notification (protected)
router.delete('/:id', authMiddleware, notificationController.deleteNotification);

module.exports = router;