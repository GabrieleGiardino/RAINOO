const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: { type: String },
  cognome: { type: String },
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String },
  googleId: { type: String, default: null }, 
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);



module.exports = User;
