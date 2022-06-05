import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    // <Redirect to='/campsites' />
    history.push('/')
  };

  return (
    <div className='pd-container'>
      <button className='pd-btn' onClick={openMenu}>
        <i className="fas fa-user-circle " />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className='pd pd-name'>{user.username}</li>
          <li className='pd pd-email'>{user.email}</li>
          <li>
            <button className='lo-btn'onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
      <span id='pd-text'>Profile</span>
    </div>
  );
}

export default ProfileButton;