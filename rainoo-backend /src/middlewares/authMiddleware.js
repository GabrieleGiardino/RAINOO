const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {

    if (req.isAuthenticated && req.isAuthenticated()) {
      return next();
    }


    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Token mancante o utente non autenticato!' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'Utente non trovato!' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Errore authMiddleware:', error.message);
    res.status(401).json({ message: 'Accesso non autorizzato!' });
  }
};

module.exports = authMiddleware;
