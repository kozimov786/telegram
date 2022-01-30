import React from 'react';
import mayoqImg from './../../images/mayoq.jpeg'

const ChatItem = () => {
  return (
    <div className='chat-item'>
      <img className='chat-item__img' src={mayoqImg} alt="react img" />
      <div className="chat-item__info">
        <h4 className="chat-item__title">Mayoq Hub Group</h4>
        <p className='chat-item__user'>Fazliddin: <span className='chat-item__user-message'>Vaalekim assalom</span> </p>
      </div>
      <div className="chat-item__not">
        <span className='chat-item__time'>20:04</span>
        <span className='badge chat-item__badge'>2</span>
      </div>
    </div>
  );
};

export default ChatItem;