// socketService.js
// Socket.io client setup for real-time messaging

import { io } from 'socket.io-client';

// Define the socket connection endpoint
const SOCKET_URL = 'http://localhost:3000'; // Change to your server URL if needed

// Create a socket connection
const socket = io(SOCKET_URL);

/**
 * Connect to the socket server
 */
socket.on('connect', () => {
    console.log('Connected to socket server');
});

/**
 * Disconnect from the socket server
 */
socket.on('disconnect', () => {
    console.log('Disconnected from socket server');
});

/**
 * Listen for incoming messages
 */
socket.on('message', (message) => {
    console.log('New message received:', message);
    // Handle the new message (you might want to update the UI or store it in a state)
});

/**
 * Send a new message to the server
 * @param {string} msg - The message to send
 */
export const sendMessage = (msg) => {
    socket.emit('message', msg);
    console.log('Message sent:', msg);
};

/**
 * Join a specific chat room
 * @param {string} room - The room to join
 */
export const joinRoom = (room) => {
    socket.emit('join', room);
    console.log(`Joined room: ${room}`);
};

/**
 * Leave a specific chat room
 * @param {string} room - The room to leave
 */
export const leaveRoom = (room) => {
    socket.emit('leave', room);
    console.log(`Left room: ${room}`);
};

// Export the socket instance if needed elsewhere
export default socket;