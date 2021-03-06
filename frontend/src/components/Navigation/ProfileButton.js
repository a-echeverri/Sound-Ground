import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
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
  };

  return (
    <>
    <div className="profile-button-div">
      <i className="fas fa-user-astronaut"></i>
      <button onClick={openMenu} className="profile-button">
      {user.username}
      </button>  
      </div>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Sign Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;