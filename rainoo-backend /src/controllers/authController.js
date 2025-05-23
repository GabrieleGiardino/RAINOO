const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

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
    console.error('Errore durante la registrazione:', error);
    res.status(500).json({ message: 'Errore interno del server' });
  }
};

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

    res.json({
      token,
      user: {
        id: user._id,
        nome: user.nome,
        cognome: user.cognome,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Errore login Google:', error);
    res.status(500).json({ message: 'Errore durante il login con Google' });
  }
};

module.exports = {
  registerUser,
  googleAuthCallback
};

