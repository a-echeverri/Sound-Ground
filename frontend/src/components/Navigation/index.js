import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import UploadFormModal from "../UploadFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <button type="button" className="user-button">
          <ProfileButton user={sessionUser} />
        </button>
        <div className="user-container">
            <button type="button" className="user-button">
            <NavLink to={`/users/${sessionUser.id}`}>Library</NavLink>
            </button>
            </div>
        {/* <button type="button" className="user-page-button">
          <NavLink to={`/users/${sessionUser.username}`}>
            {sessionUser.username}
          </NavLink>
        </button> */}
      </>
    );
  } else {
    sessionLinks = (
      <div className="login-menu-right">
        <LoginFormModal />
        <SignupFormModal />
      </div>
    );
  }

  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <div className="nav-logo-container">
          <button type="button" className="nav-logo">
            <NavLink exact to="/">
              SoundGround
            </NavLink>
          </button>
        </div>
        <div className="nav-menu-container">
          <div className="home-container">
            <button type="button" className="home-button">
              <NavLink to="/">Home</NavLink>
            </button>
          </div>
          <div className="songs-container">
            <button type="button" className="songs-button">
              <NavLink to="/songs">Stream</NavLink>
            </button>
          </div>
          {/* <div className="user-container">
            <button type="button" className="user-button">
            <NavLink to="/users">Library</NavLink>
            </button>
          </div> */}
        </div>
      </div>
      <div className="nav-bar-right">
        {isLoaded && sessionLinks}
        <button type="button" className="upload-button">
          <UploadFormModal />
        </button>
      </div>
    </div>
  );
}

export default Navigation;
