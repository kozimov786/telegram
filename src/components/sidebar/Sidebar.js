import React from 'react';
import './sidebar.css';
import SidebarNav from './SidebarNav';
import SidebarMenu from './SidebarMenu'
import Chat from '../chat/Chat';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarNav />
      <SidebarMenu />
      <Chat />
    </div>
  );
};

export default Sidebar;