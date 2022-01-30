import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import mayoqImg from './../../images/mayoq.jpeg'


const Nav = () => {
  return (
    <div className='navbar'>
      <img className='navbar__img' src={mayoqImg} alt="react img" />
      <div className="navbar__info">
        <h3>Mayoq Hub Group</h3>
        <p><span>17</span>members,<span>3 </span>online</p>
      </div>
      <div className="navbar__pinned">
        <span className='navbar__pinned-title'>Pinned Message</span>
        <span className='navbar__pinned-item'>#react #junior
          В компанию </span>
      </div>
      <div className="navbar__icons">
        <FontAwesomeIcon className='navbar__pin' icon={faThumbtack} />
        <FontAwesomeIcon className='navbar__search' icon={faSearch} />
        <FontAwesomeIcon className='navbar__dots' icon={faEllipsisV} />
      </div>
    </div>
  );
};

export default Nav;