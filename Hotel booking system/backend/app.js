const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json()); // to parse JSON data

app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);

module.exports = app;