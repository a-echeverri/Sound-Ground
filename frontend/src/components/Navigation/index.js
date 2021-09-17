import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <li>
        <NavLink to="/user">User</NavLink>
      </li>
      <li>
        <NavLink to="/songs">Songs</NavLink>
      </li>
      <li>
        <NavLink to="/upload">Upload</NavLink>
      </li>
      <li>
        <NavLink to={`{/users/${sessionUser.username}`}>{sessionUser.username}</NavLink>
      </li>
      <li>
        <ProfileButton user={sessionUser} />
      </li>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <div className="nav-bar">
      <header>
        <NavLink exact to="/">SoundGround</NavLink>
        {isLoaded && sessionLinks}
      </header>
    </div>
  );
}

export default Navigation;