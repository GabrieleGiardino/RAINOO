const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const cloudinary = require('../config/Cloudinary');
const streamifier = require('streamifier');

const registerUser = async (req, res) => {
  try {
    const { nome, cognome, email, password, age, userType } = req.body;

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
      age,
      userType: userType || 'base',
    });

    await newUser.save();

    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(201).json({
      message: 'Registrazione completata!',
      token,
      user: {
        _id: newUser._id,
        nome: newUser.nome,
        cognome: newUser.cognome,
        email: newUser.email,
        age: newUser.age,
        userType: newUser.userType
      },
    });
  } catch (error) {
    console.error('❌ Errore durante la registrazione:', error);
    res.status(500).json({ message: 'Errore interno del server' });
  }
};

const googleAuthCallback = async (req, res) => {
  try {
    const { displayName, name, emails } = req.user;
    const email = emails?.[0]?.value;
    const nome = name?.givenName || 'Nome';
    const cognome = name?.familyName || 'Cognome';

    if (!email) return res.status(400).json({ message: 'Email non fornita da Google' });

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        username: displayName || `${nome}${cognome}`,
        nome,
        cognome,
        email,
        password: '',
        userType: 'base',
      });
      await user.save();
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.redirect(`http://localhost:3001/google-success?token=${token}`);
  } catch (error) {
    console.error('❌ Errore login Google:', error);
    res.status(500).json({ message: 'Errore durante il login con Google' });
  }
};

const uploadAvatar = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!req.file) return res.status(400).json({ message: 'Nessun file caricato.' });

    const streamUpload = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'rainoo_avatars' },
          (error, result) => (result ? resolve(result) : reject(error))
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const result = await streamUpload(req);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { avatar: result.secure_url },
      { new: true }
    ).select('-password');

    res.json({
      message: 'Avatar aggiornato con successo!',
      avatarUrl: result.secure_url,
      user: updatedUser,
    });
  } catch (error) {
    console.error('Errore upload avatar:', error);
    res.status(500).json({ message: 'Errore durante il caricamento avatar.' });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const fields = (({ nome, cognome, email, age, userType }) => ({ nome, cognome, email, age, userType }))(req.body);

    const updated = await User.findByIdAndUpdate(userId, fields, { new: true }).select('-password');
    if (!updated) return res.status(404).json({ message: 'Utente non trovato.' });

    res.json(updated);
  } catch (error) {
    console.error('❌ Errore aggiornamento profilo:', error);
    res.status(500).json({ message: 'Errore durante aggiornamento profilo.' });
  }
};

const getUserRentals = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('rentals');
    if (!user) return res.status(404).json({ message: 'Utente non trovato.' });
    res.json(user.rentals);
  } catch (error) {
    console.error('❌ Errore caricamento noleggi:', error);
    res.status(500).json({ message: 'Errore durante il caricamento dei noleggi.' });
  }
};

module.exports = {
  registerUser,
  googleAuthCallback,
  uploadAvatar,
  updateUser,
  getUserRentals
};
