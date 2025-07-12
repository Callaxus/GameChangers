const Favorite = require('../../models/favorite');

// Add a post to favorites
exports.addFavorite = async (req, res) => {
  try {
    const favorite = new Favorite({
      userId: req.user.id,
      postId: req.body.postId
    });

    await favorite.save();
    res.status(201).json({ msg: 'Post added to favorites', favorite });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ msg: 'Post already in favorites' });
    }
    console.error('Error adding favorite:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Get all favorites for the logged-in user
exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.user.id }).populate('postId');
    res.json(favorites);
  } catch (err) {
    console.error('Error fetching favorites:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Remove a post from favorites
exports.removeFavorite = async (req, res) => {
  try {
    const { postId } = req.params;
    const favorite = await Favorite.findOneAndDelete({
      userId: req.user.id,
      postId: postId
    });

    if (!favorite) {
      return res.status(404).json({ msg: 'Favorite not found' });
    }

    res.json({ msg: 'Post removed from favorites' });
  } catch (err) {
    console.error('Error removing favorite:', err.message);
    res.status(500).json({ error: err.message });
  }
};
