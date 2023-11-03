import React from 'react';
import { ChatbotKit } from 'react-chatbot-kit';

const Chatbot = () => {
  const [messages, setMessages] = React.useState([]);

  const dialogueOptions = [
    {
      text: 'Hi there! How can I help you today?',
      actions: [
        {
          text: 'Ask a question',
          action: () => {
            setMessages([...messages, { text: 'Please ask your question here.' }]);
          },
        },
        {
          text: 'Get help with a problem',
          action: () => {
            setMessages([...messages, { text: 'Please describe your problem here.' }]);
          },
        },
      ],
    },
  ];

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <ChatbotKit
      messages={messages}
      dialogueOptions={dialogueOptions}
      onSendMessage={handleSendMessage}
    />
  );
}

export default Chatbot;