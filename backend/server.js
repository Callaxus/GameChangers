require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');  // Summon Connection

connectDB();  // Establish Connection

const app = express();
