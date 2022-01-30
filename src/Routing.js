
import React, { useContext } from 'react';
import { Context } from './index';
import Login from './Screen/login/Login';
import MainPage from './Screen/main/MainPage';
import { useAuthState } from 'react-firebase-hooks/auth';

const Routing = () => {

  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)


  return <>
    {user ? <MainPage /> : <Login />
    }
  </>
};

export default Routing;