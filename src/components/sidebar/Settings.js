import React, { useContext } from 'react';
import { faKaggle, faWeebly } from '@fortawesome/free-brands-svg-icons';
import { faArchive, faAward, faBookmark, faCog, faMoon, faOutdent, faRocket, faShoppingBag, faToggleOn, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Context } from '../..';
import { signOut } from '@firebase/auth';



const Settings = ({ openBurger }) => {
  const { auth } = useContext(Context)

  const SignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }

  return (
    <>
      <SettingsWrapper show={openBurger}>
        <div className="settings__item">
          <FontAwesomeIcon icon={faBookmark} />
          <h3>Saved Messages</h3>
        </div>
        <div className="settings__item">
          <FontAwesomeIcon icon={faArchive} />
          <h3>Archived Chats</h3>
        </div>
        <div className="settings__item">
          <FontAwesomeIcon icon={faUser} />
          <h3>Contact</h3>
        </div>
        <div className="settings__item">
          <FontAwesomeIcon icon={faCog} />
          <h3>Settings</h3>
        </div>
        <div className="settings__item">
          <FontAwesomeIcon icon={faMoon} />
          <h3>Night Mode</h3>
          <FontAwesomeIcon icon={faToggleOn} size='2x' />
        </div>
        <div className="settings__item">
          <FontAwesomeIcon icon={faRocket} />
          <h3>Animation</h3>
          <FontAwesomeIcon icon={faToggleOn} size='2x' />
        </div>
        <div className="settings__item">
          <FontAwesomeIcon icon={faAward} />
          <h3>Telegram Features</h3>
        </div>
        <div className="settings__item">
          <FontAwesomeIcon icon={faShoppingBag} />
          <h3>Report Bug</h3>
        </div>
        <div className="settings__item">
          <FontAwesomeIcon icon={faKaggle} />
          <h3>Switch K version</h3>
        </div>
        <div className="settings__item">
          <FontAwesomeIcon icon={faWeebly} />
          <h3>Switch to Old Version</h3>
        </div>
        <div className="settings__item">
          <FontAwesomeIcon icon={faOutdent} />
          <button className='logout' onClick={SignOut}>Log Out</button>
        </div>
        <p className='settings__decr'>Telegram WebZ alpha 1.20.4</p>
      </SettingsWrapper>
    </>
  );
};

export default Settings;

const SettingsWrapper = styled.div`
  width: 250px;
  background-color: #212121;
  padding-top: 5px;
  color: #fff;
  border-radius: 10px;
  position: absolute;
  top: 110%;
  overflow: hidden;
  box-shadow: 0  2px 10px rgba(0,0,0,0.4);
  left: 0;
  transition: all 0.5s ease-in;
  clip-path: ${props => props.show ? 'circle(1000px at 0% 10%)' : 'circle(0% at 0% 10%)'};
`
