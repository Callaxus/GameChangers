require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');  // Summon Connection
const userRoutes = require('./routes/api/user');

// profile
app.use('/api/user', userRoutes);
connectDB();  // Establish Connection

// sort
const adRoutes = require('./routes/ads');
app.use('/api/ads', adRoutes);

const app = express();
