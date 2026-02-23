// MessageList.js
import React from 'react';

const MessageList = ({ messages }) => {
    return (
        <div className="message-list">
            {/* This map function iterates through each message in the messages array */}
            {messages.map((message, index) => (
                <div key={index} className="message">
                    {/* Displaying the sender's name and the message content */}
                    <strong>{message.sender}</strong>: {message.content}
                </div>
            ))}
        </div>
    );
};

export default MessageList;