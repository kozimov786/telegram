import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import Settings from './Settings';
import styled from 'styled-components';

const SidebarNav = () => {
  const [openBurger, setOpenBurger] = useState(false)
  const showModal = () => {
    setOpenBurger(prev => !prev)
  }
  const modalRef = useRef()


  const closeOver = (e) => {
    if (modalRef !== e.target) {
      console.log(modalRef);
      setOpenBurger(false)
    }
  }

  return (
    <>
      {openBurger ? <CloseOver onClick={closeOver} ref={modalRef} /> : ''}
      <div className='nav'>
        <div className="nav__burger-wrapper">
          <div className="nav__burger" onClick={showModal} >
            <FontAwesomeIcon icon={faBars} size='lg' />
            <Settings modalRef={modalRef} openBurger={openBurger} setOpenBurger={setOpenBurger} />
          </div>
        </div>
        <div className="nav__search-wrapper">
          <FontAwesomeIcon icon={faSearch} />
          <input type="search" placeholder='Search' />
        </div>
      </div>
    </>
  );
};

export default SidebarNav;
const CloseOver = styled.div`
 width: 100%;
 height: 100vh;
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
`