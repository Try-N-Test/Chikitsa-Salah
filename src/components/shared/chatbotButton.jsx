"use client"
import { useState } from "react";

const ChatbotButton = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const handleClick = () => {
    setChatbotOpen(true);
  };

  return (
    <button
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
      onClick={handleClick}
    >
      Chatbot
    </button>
  );
};

export default ChatbotButton;
