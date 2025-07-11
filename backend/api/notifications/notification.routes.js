const express = require('express');
const router = express.Router();
const { createNotification } = require('./notification.controller');


router.post('/create', createNotification);

module.exports = router;