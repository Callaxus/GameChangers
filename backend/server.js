require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');  // Summon Connection
const userRoutes = require('./routes/api/user');
app.use('/api/user', userRoutes);
connectDB();  // Establish Connection

const app = express();
