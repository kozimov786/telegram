import React, { useContext } from 'react';
import './login.css';
import { Context } from '../../index';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


function Login() {

  const { auth } = useContext(Context)

  const LogIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        return user;
      }).catch((error) => {
        alert(`error ${error}`)
      });
  }
  return (
    <div className='login'>
      <div className="login__content">
        <img className='login__logo-img' src="https://web.telegram.org/z/telegram-logo.1b2bb5b107f046ea9325..svg" alt="telegram logo" />
        <h1 className='login__heading'>Telegram</h1>
        <button className='login__btn' onClick={LogIn}>Sign In With Google</button>
      </div>
    </div>
  );
}


export default Login;