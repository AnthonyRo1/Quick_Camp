// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import logo from '../../images/logo/quickcamp-logo.png'
import './Navigation.css';

import HomeButton from './homebutton';
function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className='top-nav near-me' to='/near-me'>Near Me</NavLink>
        <NavLink className='top-nav about' to='/about'>About</NavLink>
        <NavLink className='top-nav earn-cash' to='/earn-cash'>Earn Camp Cash</NavLink>
        <NavLink className='top-nav login' to="/login">Log In</NavLink>
        <NavLink className='top-nav signup' to="/signup">Sign Up</NavLink>
        <div className='host-bg'>
        <NavLink className='hosting' to='/hosting'>Start Hosting</NavLink>
        </div>
        
      </>
    );
  }

  return (
    <div className='nav-bar'>
      <HomeButton />
    <ul className='ul-container'>
        <li className='list-container'>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </div>
  );
}

export default Navigation;