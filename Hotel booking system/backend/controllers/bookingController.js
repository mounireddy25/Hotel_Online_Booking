const Booking = require('../models/bookingModel');
const Room = require('../models/roomModel');

// Create a booking
const createBooking = async (req, res) => {
    const { customerName, roomId, startDate, endDate } = req.body;
    try {
        const room = await Room.findById(roomId);
        if (!room || !room.available) return res.status(400).send('Room not available');
        
        const totalPrice = room.price * (new Date(endDate) - new Date(startDate)) / (1000 * 3600 * 24); // Calculate total price
        
        const newBooking = new Booking({
            customerName,
            roomId,
            startDate,
            endDate,
            totalPrice,
        });
        await newBooking.save();
        
        room.available = false; // Mark room as unavailable
        await room.save();
        
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).send('Error creating booking');
    }
};

// Get all bookings
const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('roomId');
        res.json(bookings);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

module.exports = { createBooking, getBookings };
