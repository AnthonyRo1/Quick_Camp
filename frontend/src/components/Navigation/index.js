// frontend/src/components/Navigation/index.js
import { useParams } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import CreateCampsite from '../CreateCampsite';
import BookingsButton from './bookingsbutton';
import './Navigation.css';

import HomeButton from './homebutton';
function Navigation({ isLoaded}) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='logged-in-nav'>
      <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <>

        <NavLink className='top-nav about' to='/about'>About</NavLink>
        <NavLink className='top-nav login' to="/login">Log In</NavLink>
        <NavLink className='top-nav signup' to="/signup">Sign Up</NavLink>
        <div className='host-bg'>
        <NavLink className='hosting' to='/hosting'>Start Hosting</NavLink>
        </div>
        
      </>
    );
  }

  return (
    <div className='nav-bar-container'>
    <div className='nav-bar'>
    <div className='left-nav'>
     { !sessionUser && <div className='hamburger-container'></div> }
      <HomeButton />
    </div>
    <ul className='ul-container'>
        <li className={sessionUser ? 'user-nav' : 'list-container'}>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </div>
    </div>
  );
}

export default Navigation;