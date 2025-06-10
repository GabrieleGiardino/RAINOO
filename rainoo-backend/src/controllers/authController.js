const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// REGISTER USER
const registerUser = async (req, res) => {
  try {
    const { nome, cognome, email, password } = req.body;

    if (!nome || !cognome || !email || !password) {
      return res.status(400).json({ message: 'Tutti i campi sono obbligatori!' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email già in uso!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      nome,
      cognome,
      username: `${nome}${cognome}`,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(201).json({
      message: 'Registrazione completata!',
      token,
      user: {
        id: newUser._id,
        nome: newUser.nome,
        cognome: newUser.cognome,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('❌ Errore durante la registrazione:', error);
    res.status(500).json({ message: 'Errore interno del server' });
  }
};

// GOOGLE AUTH CALLBACK
const googleAuthCallback = async (req, res) => {
  try {
    const { displayName, name, emails } = req.user;
    const email = emails?.[0]?.value;
    const nome = name?.givenName || 'Nome';
    const cognome = name?.familyName || 'Cognome';

    if (!email) {
      return res.status(400).json({ message: 'Email non fornita da Google' });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        username: displayName || `${nome}${cognome}`,
        nome,
        cognome,
        email,
        password: '',
      });
      await user.save();
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    console.log('✅ Google login success, token:', token);
    res.redirect(`http://localhost:3001/google-success?token=${token}`);
  } catch (error) {
    console.error('❌ Errore login Google:', error);
    res.status(500).json({ message: 'Errore durante il login con Google' });
  }
};

// UPLOAD AVATAR 
const uploadAvatar = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!req.file || !req.file.path) {
      return res.status(400).json({ message: 'Nessun file caricato.' });
    }

    // multer + CloudinaryStorage 
    const user = await User.findByIdAndUpdate(
      userId,
      { avatar: req.file.path },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'Utente non trovato.' });
    }

    res.json({
      message: 'Avatar aggiornato!',
      user: {
        id: user._id,
        nome: user.nome,
        cognome: user.cognome,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error('❌ Errore upload avatar:', error);
    res.status(500).json({ message: 'Errore durante l’upload dell’avatar' });
  }
};

module.exports = {
  registerUser,
  googleAuthCallback,
  uploadAvatar,
};
