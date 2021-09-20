import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import UploadFormPage from '../UploadFormPage';
import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      {/* <div>
        <ProfileButton user={sessionUser} />
      </div> */}
        <button type="button" className="user-button">
        <ProfileButton user={sessionUser} />
        </button>
        <button type="button" className="user-page-button">
        <NavLink to={`/users/${sessionUser.username}`}>{sessionUser.username}</NavLink>
        </button>
      </>
    );
  } else {
    sessionLinks = (
      <>
      <div className="landing-nav">
        <div className="landing-nav-left">
        {/* <h1 className="landing-logo">SoundGround</h1> */}
        </div>
      <div className="landing-nav-right">
      <div className="signin-container">
        <LoginFormModal />
        <SignupFormModal />
      </div>
      </div>
      </div>
      </>
    );
  }

  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
      <button type="button" className="nav-logo">
      <NavLink exact to="/">SoundGround</NavLink>
      </button>
      </div>
      <div className="nav-bar-right">
        <button type="button" className="user-button">
        <NavLink to="/users">User</NavLink>
        </button>
        <button type="button" className="songs-button">
        <NavLink to="/songs">Stream</NavLink>
        </button>
        <button type="button" className="upload-button">
        {/* <NavLink to="/upload">Upload</NavLink> */}
        <UploadFormPage />
        </button>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;