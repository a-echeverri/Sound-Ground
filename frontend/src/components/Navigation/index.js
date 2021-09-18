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
      <div className="homepage-nav">
        <h1 className="nav-logo">
        <NavLink exact to="/">SoundGround</NavLink>
        </h1>
        <NavLink to="/user">User</NavLink>
        <NavLink to="/songs">Songs</NavLink>
        <NavLink to="/upload">Upload</NavLink>
        <ProfileButton user={sessionUser} />
        <NavLink to={`/users/${sessionUser.username}`}>{sessionUser.username}</NavLink>
        
      </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
      <div className="signin-container">
        <LoginFormModal />
        <SignupFormModal />
      </div>
      </>
    );
  }

  return (
    <div className="nav-bar">
      <h1 className="nav-logo">
        SoundGround
      {/* <NavLink exact to="/">SoundGround</NavLink> */}
      </h1>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;