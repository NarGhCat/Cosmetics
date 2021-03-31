
import '../../styles/navModules.css'
import React, { useState } from 'react'
import addUserIcon from '../../Pics/icons/addUser.png'
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import { auth, db } from '../../index'
const NavModules = (props) => {
  const { changeProfileDisplay, handleToggle, uid, email, userImg } = props
  let navUserSetting;
  if (uid) {
    navUserSetting = <div style={{ display: (changeProfileDisplay ? "block" : "none") }} className='profile-dropdown'>
      <div className='profile-dropdown-content'>
        <div className='profile-dropdown-info profile-items'>
          <span className='profile-dropdown-info-img'><img alt='img' src={userImg} />{userImg}</span>
          <span className='profile-dropdown-info-name'>{email}</span>
        </div>
        <div className='profile-dropdown-logout'><span onClick={() => { auth.signOut(); window.location.reload() }} className='profile-dropdown-logout-button'>LogOut</span></div>
      </div>
    </div>
  }
  else {
    navUserSetting = <div style={{ display: (changeProfileDisplay ? "block" : "none") }} className="profile-dropdown">
      <div className="profile-dropdown-content">
        <div className="navbar-loginButtonLink">
          <Link id="loginButtonLink" to="/login">Login</Link>
        </div>
        <div className="navbar-createAccountButtonLink">
          <span>
            <img src={addUserIcon} alt="img" />
          </span>
          <Link id="createAccountButtonLink" to="signup">Create New Account</Link>


        </div>
      </div>
    );
  }
  return (
    <>
      <div onClick={handleToggle} style={{ display: (changeProfileDisplay ? "block" : "none") }} className="close-dropDown"></div>
      {navUserSetting}
    </>
  );
};

export default NavModules;

