const Notification = require('../../models/notification');

// Create a new notification
exports.createNotification = async (req, res) => {
  try {
    const { type, message, data } = req.body; // userId removed

    // Validate required fields
    if (!type || !message) {
      return res.status(400).json({ msg: 'Missing required fields (type, message)' });
    }

    const notification = new Notification({
      userId: req.user.id, // Automatically assign from JWT user
      type,
      message,
      data,
      isRead: false, // default
      createdAt: new Date(),
      updatedAt: new Date()
    });

    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    console.error('Error creating notification:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// count unread

exports.getUnreadCount = async (req, res) => {
  try {
    const count = await Notification.countDocuments({ 
      userId: req.user.id, 
      isRead: false 
    });
    res.json({ count });
  } catch (err) {
    console.error('Error fetching notification count:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Get all notifications for the authenticated user
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    console.error('Error fetching notifications:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Mark a notification as read
exports.markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);

    if (!notification) return res.status(404).json({ msg: 'Notification not found' });
    if (notification.userId.toString() !== req.user.id) {
      return res.status(403).json({ msg: 'Unauthorized' });
    }

    notification.isRead = true;
    notification.updatedAt = new Date();
    await notification.save();

    res.json(notification);
  } catch (err) {
    console.error('Error marking notification as read:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Delete a notification
exports.deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findOne({
      _id: req.params.id,
      userId: req.user.id // Enforce ownership check in query
    });

    if (!notification) {
      return res.status(404).json({ msg: 'Notification not found or unauthorized' });
    }

    await Notification.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.json({ msg: 'Notification deleted' });
  } catch (err) {
    console.error('Error deleting notification:', err.message);
    res.status(500).json({ error: err.message });
  }
};