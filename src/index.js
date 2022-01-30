import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { db, auth, storage, app } from './firebase';



export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{ db, app, auth, storage }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>,
  document.getElementById('root')
);
