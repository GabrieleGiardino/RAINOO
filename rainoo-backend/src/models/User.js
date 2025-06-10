const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: String,
  cognome: String,
  username: String,
  email: { type: String, unique: true },
  password: String,
  avatar: String, 
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);

