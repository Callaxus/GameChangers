const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Custom string ID
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  local: { type: String, required: true }
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);

