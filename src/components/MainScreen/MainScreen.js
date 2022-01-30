import React from 'react';
import MessageContent from './MessageContent';
import Nav from './Nav';
import './MainScreen.css';

const MainScreen = () => {
  return (
    <div className='main-side'>
      <Nav />
      <MessageContent />
    </div>
  );
};

export default MainScreen;