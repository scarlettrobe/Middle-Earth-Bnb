// Navigation.js
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
      {isLoaded && sessionUser && (
        <>
          <li>
            <NavLink to="/spots/new">Create a New Spot</NavLink>
          </li>
          <li className="profile-button-container">
            <ProfileButton user={sessionUser} />
          </li>
        </>
      )}
    </ul>
  );
}

export default Navigation;
