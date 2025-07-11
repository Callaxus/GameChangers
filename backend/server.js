require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Test route
app.get('/', (req, res) => res.send('Hello world!'));

// API routes
app.use('/api/post', require('./routes/api/post.js'));
app.use('/api/notifications', require('./api/notifications/notification.routes'));
app.use('/api/auth', require('./api/auth/auth.routes.js'));
app.use('/api/offer', require('./routes/api/offer.js'));
app.use('/api/user', require('./routes/api/user'));
// app.use('/api/ads', require('./routes/ads'));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));