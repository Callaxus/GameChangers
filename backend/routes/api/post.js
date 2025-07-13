const express = require('express');
const router = express.Router();
const postController = require('../../api/post/post.controller');
const auth = require('../../api/auth/auth.middleware');

// GET /api/post - List all posts
router.get('/', postController.getAllPosts);

// GET /api/post/:id - Get a single post
router.get('/:id', postController.getPostById);

// POST /api/post - Create new post (requires auth)
router.post('/', auth, postController.createPost);

// PUT /api/post/:id - Update post (requires auth, owner only)
router.put('/:id', auth, postController.updatePost);

// DELETE /api/post/:id - Delete post (requires auth, owner only)
router.delete('/:id', auth, postController.deletePost);

module.exports = router;
