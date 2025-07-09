const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Custom string ID
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  local: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);




/*
{
    "_id": "U000",
    "username": "username"
    ,"password": "password",
    "email": "mail.mail@mail.mail",
    "local": "local"
}
    
*/