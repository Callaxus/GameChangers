const express = require('express');
const router = express.Router();
const postController = require('../../api/post/post.controller');

// Use the controller methods
router.post('/create', postController.createPost);
// Add other routes as needed, e.g.:
// router.put('/:id', postController.updatePost);
// router.delete('/:id', postController.deletePost);

module.exports = router;