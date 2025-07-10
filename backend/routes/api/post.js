const express = require('express');
const router = express.Router();
const { createPost } = require('./post.controller');

router.post('/create', createPost);

module.exports = router;