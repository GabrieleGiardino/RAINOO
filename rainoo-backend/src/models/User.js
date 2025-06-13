const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  station: String,
  date: { type: Date, default: Date.now },
  duration: Number, // es. in ore
  amount: Number // es. in euro
});

const userSchema = new mongoose.Schema({
  nome: String,
  cognome: String,
  username: String,
  email: { type: String, unique: true },
  password: String,
  avatar: String,
  age: Number,
  userType: { type: String, enum: ['base', 'premium'], default: 'base' },
  rentals: [rentalSchema] // elenco dei noleggi
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
