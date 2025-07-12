const Product = require('../../models/product');
const Post = require('../../models/post');

// GET /api/post - List all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('product_id');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/post/:id - Get single post
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('product_id');
    if (!post) return res.status(404).json({ msg: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/post - Create new post
exports.createPost = async (req, res) => {
  try {
    const { product, post } = req.body;

    // Create new product
    const newProduct = new Product(product);
    await newProduct.save();

    // Create new post, bind to user
    const newPost = new Post({
      ...post,
      user_id: req.user.id, // From JWT
      product_id: newProduct._id
    });
    await newPost.save();

    res.status(201).json({ post: newPost, product: newProduct });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/post/:id - Update post (owner only)
exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    let post = await Post.findById(id);

    if (!post) return res.status(404).json({ msg: 'Post not found' });

    // Check ownership
    if (post.user_id.toString() !== req.user.id) {
      return res.status(403).json({ msg: 'Unauthorized' });
    }

    post = await Post.findByIdAndUpdate(id, req.body, { new: true });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/post/:id - Delete post (owner only)
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) return res.status(404).json({ msg: 'Post not found' });

    // Check ownership
    if (post.user_id.toString() !== req.user.id) {
      return res.status(403).json({ msg: 'Unauthorized' });
    }

    await post.remove();
    res.json({ msg: 'Post deleted', post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
