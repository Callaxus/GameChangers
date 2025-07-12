const express = require('express');
const router = express.Router();
const postController = require('../../api/post/post.controller');
const authMiddleware = require('../../api/auth/auth.middleware');

// Public routes
router.get('/', postController.getAllPosts);        // GET /api/post - List all posts
router.get('/:id', postController.getPostById);     // GET /api/post/:id - Get single post

// Protected routes
router.post('/', authMiddleware, postController.createPost);      // POST /api/post - Create post
router.put('/:id', authMiddleware, postController.updatePost);    // PUT /api/post/:id - Update post
router.delete('/:id', authMiddleware, postController.deletePost); // DELETE /api/post/:id - Delete post

module.exports = router;