const express = require('express');
const { getRooms, getRoomById, addRoom } = require('../controllers/roomController');
const router = express.Router();

router.get('/', getRooms);
router.get('/:id', getRoomById);
router.post('/', addRoom);

module.exports = router;
