const express = require('express');
const router = express.Router();

// Forward all /api/ads requests to /api/posts
router.use('/', require('./post'));

module.exports = router;



/*
const express = require('express');
const router = express.Router();
const Post = require('../../models/post'); // Updated model import

// @route   GET /api/ads
// @desc    List posts with filters, search, and sorting (via embedded product fields)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const {
      search,
      category,
      minPrice,
      maxPrice,
      sortBy,    // e.g., "product.price", "createdAt"
      order      // "asc" or "desc"
    } = req.query;

    const query = {};

    // 🔍 Text search (title or product description)
    if (search) {
      query.$or = [
        { 'product.name': { $regex: search, $options: 'i' } },
        { 'product.description': { $regex: search, $options: 'i' } }
      ];
    }

    // 🗂️ Filter by product category
    if (category) {
      query['product.category'] = category;
    }

    // 💲 Filter by product price range
    if (minPrice || maxPrice) {
      query['product.price'] = {};
      if (minPrice) query['product.price'].$gte = Number(minPrice);
      if (maxPrice) query['product.price'].$lte = Number(maxPrice);
    }

    // ↕️ Sorting
    const sort = {};
    if (sortBy) {
      sort[sortBy] = order === 'desc' ? -1 : 1;
    }

    const posts = await Post.find(query).sort(sort);
    res.json(posts);

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error while searching posts' });
  }
});

module.exports = router;
*/