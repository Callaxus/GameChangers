// app.js

const express = require('express');
const connectDB = require('./config/db');

var cors = require('cors');

// routes
const app = express();



// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/post', require('./routes/api/post'));
app.use('/api/notifications', require('./api/notifications/notification.routes'));
app.use('/api/auth', require('./api/auth/auth.routes'));
app.use('/api/offers', require('./api/offer/offer.routes'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

