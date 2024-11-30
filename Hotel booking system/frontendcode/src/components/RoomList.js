import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RoomList = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/rooms')
            .then(res => setRooms(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Available Rooms</h2>
            {rooms.map(room => (
                <div key={room._id}>
                    <h3>{room.name}</h3>
                    <p>{room.type} - ${room.price} per night</p>
                    <p>Capacity: {room.capacity}</p>
                </div>
            ))}
        </div>
    );
};

export default RoomList;
