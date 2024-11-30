const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    capacity: { type: Number, required: true },
    available: { type: Boolean, default: true }
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
