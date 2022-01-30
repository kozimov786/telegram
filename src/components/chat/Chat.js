import React from 'react';
import ChatItem from './ChatItem';
import './chat.css'

const Chat = () => {
  return (
    <div className='chat'>
      <ChatItem className='chat-item__active' />
    </div>
  );
};

export default Chat;