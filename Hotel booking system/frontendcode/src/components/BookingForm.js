import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [roomId, setRoomId] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingData = { customerName, roomId, startDate, endDate };
        try {
            const res = await axios.post('http://localhost:5000/api/bookings', bookingData);
            alert('Booking successful!');
        } catch (err) {
            alert('Error creating booking');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={customerName} onChange={e => setCustomerName(e.target.value)} placeholder="Your Name" />
            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
            <select value={roomId} onChange={e => setRoomId(e.target.value)}>
                {/* populate with available rooms */}
            </select>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;
