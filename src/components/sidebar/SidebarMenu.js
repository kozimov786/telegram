
import React from 'react';

const SidebarMenu = () => {
  return (
    <div className='menu'>
      <button className='menu__btn'>
        <span className='menu__btn-inner'>All <span className='badge'>12</span> </span>
      </button>
      <button className='menu__btn'>
        <span className='menu__btn-inner'>Channel <span className='badge'>12</span> </span>
      </button>
      <button className='menu__btn'>
        <span className='menu__btn-inner'>Group <span className='badge'>12</span> </span>
      </button>
      <button className='menu__btn'>
        <span className='menu__btn-inner'>Personal <span className='badge'>12</span> </span>
      </button>
    </div>
  );
};

export default SidebarMenu;