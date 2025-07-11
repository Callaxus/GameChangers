const express = require('express');
const router = express.Router();
const Ad = require('../models/Ad');

// @route   GET /api/ads
// @desc    Listar anúncios com filtros, pesquisa e ordenação
// @access  Público
router.get('/', async (req, res) => {
  try {
    const {
      search,
      category,
      minPrice,
      maxPrice,
      sortBy,    // ex: "price", "createdAt"
      order      // "asc" ou "desc"
    } = req.query;

    const query = {};

    // Pesquisa por texto
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Filtro por categoria
    if (category) query.category = category;

    // Filtro por faixa de preço
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Ordenação
    const sort = {};
    if (sortBy) {
      sort[sortBy] = order === 'desc' ? -1 : 1;
    }

    const ads = await Ad.find(query).sort(sort);
    res.json(ads);

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Erro no servidor' });
  }
});

module.exports = router;