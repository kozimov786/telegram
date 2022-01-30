import React from 'react';

const ChatItem = ({ title, user, message, img, time, badge, active }) => {
  return (
    <div className={active ? 'chat-item__active' : "chat-item"}>
      <img className='chat-item__img' src={img} alt="react img" />
      <div className="chat-item__info">
        <h4 className="chat-item__title">{title}</h4>
        <p className='chat-item__user'>{user}: <span className='chat-item__user-message'>{message}</span> </p>
      </div>
      <div className="chat-item__not">
        <span className='chat-item__time'>{time}</span>
        <span className='badge chat-item__badge'>{badge}
        </span>
      </div>
    </div>
  );
};

export default ChatItem;