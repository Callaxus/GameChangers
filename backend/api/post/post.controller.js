const Post = require('../../models/post');

// GET /api/post - List all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error while fetching posts' });
  }
};

// GET /api/post/:id - Get a single post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error while fetching post' });
  }
};

// POST /api/post - Create a new post
exports.createPost = async (req, res) => {
  try {
    const {
      postid,
      price,
      for_trade,
      prod_local,
      status,
      product
    } = req.body;

    const newPost = new Post({
      postid,
      user_id: req.user.id, // from JWT token
      price,
      for_trade,
      prod_local,
      status,
      product
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error while creating post' });
  }
};

// PUT /api/post/:id - Update a post (owner only)
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Check ownership
    if (post.user_id !== req.user.id) {
      return res.status(403).json({ msg: 'Not authorized to update this post' });
    }

    // Update fields
    const { price, for_trade, prod_local, status, product } = req.body;
    if (price !== undefined) post.price = price;
    if (for_trade !== undefined) post.for_trade = for_trade;
    if (prod_local !== undefined) post.prod_local = prod_local;
    if (status !== undefined) post.status = status;
    if (product !== undefined) post.product = product;

    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error while updating post' });
  }
};

// DELETE /api/post/:id - Delete a post (owner only)
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Check ownership
    if (post.user_id !== req.user.id) {
      return res.status(403).json({ msg: 'Not authorized to delete this post' });
    }

    await post.remove();
    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error while deleting post' });
  }
};
