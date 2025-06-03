const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: String,
  cognome: String,
  username: String,
  email: { type: String, unique: true },
  password: String,
  avatar: String, // 🔥 aggiunto campo avatar (URL immagine)
});

module.exports = mongoose.model('User', userSchema);
