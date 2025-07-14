const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userid: { type: String, required: false },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  local:    { type: String, required: false },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  phone: { type: String, required: true }
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);