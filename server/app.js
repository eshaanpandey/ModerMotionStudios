const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db.js')
const projectRoutes = require('./src/routes/projectRoutes');
const fileRoutes = require('./src/routes/fileRoutes');
const contactRoutes = require('./src/routes/contactRoutes');
const { errorHandler } = require('./src/utils/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded bodies

// Database connection
connectDB();

// Routes
app.use('/api', projectRoutes);
app.use('/api', fileRoutes);
app.use('/api', contactRoutes);

// Error handling middleware
app.use(errorHandler);

// Export the app for testing or use in `server.js`
module.exports = app;
