import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');
  const phoneNumber = '+9163024xxxxx';  

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    const fullURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(fullURL, '_blank');
  };
  

  return (
      <div className="whatsapp-chat-container">
        <h2 className='text-danger text-center'>Join the Chat</h2>
        <textarea
          className="message-input"
          value={message}
          onChange={handleMessage}
          placeholder="Type your message here..."
          rows={13}
          cols={50}
        />
        <button className="btn btn-danger " onClick={handleSendMessage}>Send Message</button>
      </div>
  );
};

export default Contact;
