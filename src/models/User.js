const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // ... d'autres champs
});

const User = mongoose.model('User', userSchema);

module.exports = User;
