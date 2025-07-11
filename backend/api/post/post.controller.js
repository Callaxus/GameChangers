const Product = require('../../models/product');
const Post = require('../../models/post');

exports.createPost = async(req, res) =>{
    try{
        const {product, post} = req.body;
         
        const newProduct = new Product(product);
        await newProduct.save();

        const newPost = new Post({ ...post, product_id: newProduct._id});
        await newPost.save();

        res.status(201).json({post: newPost, product: newProduct});
    } catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedPost) return res.status(404).json({ msg: 'Post not found' });
        res.json(updatedPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) return res.status(404).json({ msg: 'Post not found' });
        res.json({ msg: 'Post deleted', post: deletedPost });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};