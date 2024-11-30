const Room = require('../models/roomModel');

// Get all rooms
const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Get room by ID
const getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) return res.status(404).send('Room not found');
        res.json(room);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Add a new room
const addRoom = async (req, res) => {
    const { name, type, price, capacity } = req.body;
    try {
        const newRoom = new Room({ name, type, price, capacity });
        await newRoom.save();
        res.status(201).json(newRoom);
    } catch (err) {
        res.status(400).send('Error adding room');
    }
};

module.exports = { getRooms, getRoomById, addRoom };
