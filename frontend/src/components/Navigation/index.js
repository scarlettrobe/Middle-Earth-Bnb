import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

import Logo from "./assets/Logo.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <ul className="navigation-container">
      <li>
        <NavLink exact to="/">
          <img src={Logo} alt="Home" />
        </NavLink>
      </li>
      {isLoaded && (
        <li className="profile-button-container">
          <ProfileButton user={sessionUser} />
        </li>
      )}
    </ul>
  );
}

export default Navigation;
