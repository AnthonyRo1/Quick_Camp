import React from 'react';

import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';
import * as campsiteActions from './store/campsites';
import { createContext, useContext, useState } from 'react';


const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.campsiteActions = campsiteActions;
}

const cancelBtnContext = createContext();
export const useBtnContext = () => useContext(cancelBtnContext);


function Root() {

  const [hideBtn, setHideBtn] = useState(true);

  return (
    <Provider store={store} value={[hideBtn, setHideBtn]}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
