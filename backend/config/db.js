const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables
const db = process.env.MONGO_URI; // Get DB URI from .env

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to the Holy Database(MongoDb)');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;