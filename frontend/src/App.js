// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import {getCampsites} from './store/campsites';
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Campsite from "./components/Campsite";
import StartHosting from "./components/StartHosting";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getCampsites())
  }, [dispatch]);

  return (
    <>
      <Navigation className='nav-bar' isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/campsites' exact>
            <Main />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/campsites/:id'>
            <Campsite />
          </Route>
          <Route path='/hosting'>
            <StartHosting />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;