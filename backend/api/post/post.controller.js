const Product = require('../../../models/Product');
const Post = require('../../../models/Post');

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