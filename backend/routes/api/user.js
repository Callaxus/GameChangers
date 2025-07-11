const express = require('express');
const User = require('../../models/user');
const authMiddleware = require('../../api/auth/auth.middleware');

const router = express.Router();

// @route   GET /api/user/profile
// @desc    Obter perfil do utilizador autenticado
// @access  Privado
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ msg: 'Utilizador não encontrado' });

    res.json(user);
  } catch (err) {
    res.status(500).send('Erro no servidor');
  }
});

// @route   PUT /api/user/profile
// @desc    Atualizar perfil do utilizador autenticado
// @access  Privado
router.put('/profile', authMiddleware, async (req, res) => {
  const { username, email } = req.body;

  try {
    let user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: 'Utilizador não encontrado' });

    if (username) user.username = username;
    if (email) user.email = email;

    await user.save();

    res.json({
      msg: 'Perfil atualizado com sucesso',
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;