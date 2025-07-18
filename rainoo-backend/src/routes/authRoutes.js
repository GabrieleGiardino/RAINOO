const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const authMiddleware = require('../middlewares/authMiddleware');
const { registerUser } = require('../controllers/authController');

const router = express.Router();

router.get('/debug', (req, res) => {
  res.json({ message: '✅ Route /api/auth/debug attiva!' });
});

router.post('/register', registerUser);

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Email o password non validi' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Email o password non validi' });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      }
    });
  } catch (error) {
    console.error('Errore login:', error);
    res.status(500).json({ message: 'Errore del server durante il login' });
  }
});

router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    message: 'Benvenuto nel tuo profilo!',
    user: req.user,
  });
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login/failed' }),
  async (req, res) => {
    try {
      const token = jwt.sign(
        { id: req.user._id, username: req.user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      console.log('✅ Google callback, token generato:', token);
      res.redirect(`http://localhost:3000/google-success?token=${token}`);
    } catch (error) {
      console.error('❌ Errore nel callback Google:', error);
      res.redirect('/login/failed');
    }
  }
);

module.exports = router;

