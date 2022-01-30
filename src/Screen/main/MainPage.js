import React from 'react';
import './mainPage.css'
import Sidebar from '../../components/sidebar/Sidebar';
import MainScreen from '../../components/MainScreen/MainScreen';

const MainPage = () => {

  return (
    <div className='main-page' >
      <Sidebar />
      <MainScreen />
    </div>
  );
};

export default MainPage;