import "../../styles/navModules.css";
import React, { useState } from "react";
import addUserIcon from "../../Pics/icons/addUser.png";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { auth, db } from "../../index";

const Menumodules = (props) => {
  let user = auth.currentUser;
  let email, uid;
  const [userImg, setImg] = useState("");
  if (user != null) {
    email = user.email;
    uid = user.uid;
    db.collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setImg(doc.data().image);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  const handleLogout = () => {
    auth.signOut();
    window.location.reload();
  };
  let manuUserSeting;
  if (email) {
    manuUserSeting = (
      <div
        style={{ display: props.changeProfileDisplay }}
        className="profile-dropdown"
      >
        <div className="profile-dropdown-contant">
          <div className="profile-dropdown-info profile-items">
            <span className="profile-dropdown-info-img">
              <img alt="img" src={userImg} />
              {userImg}
            </span>
            <span className="profile-dropdown-info-name">{email}</span>
          </div>
          <div className="profile-dropdown-logout">
            <span
              onClick={handleLogout}
              className="profile-dropdown-logout-button"
            >
              LogOut
            </span>
          </div>
        </div>
        <div className="profile-dropdown-logout">
          <span
            onClick={() => {
              auth.signOut();
              window.location.reload();
            }}
            className="profile-dropdown-logout-button"
          >
            LogOut
          </span>
        </div>
      </div>
    );
  } else {
    navUserSetting = (
      <div
        style={{ display: changeProfileDisplay ? "block" : "none" }}
        className="profile-dropdown"
      >
        <div className="profile-dropdown-content">
          <div className="navbar-loginButtonLink">
            <Link id="loginButtonLink" to="/login">
              Login
            </Link>
          </div>
          <div className="navbar-createAccountButtonLink">
            <span>
              <img src={addUserIcon} alt="img" />
            </span>
            <Link id="createAccountButtonLink" to="signup">
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        onClick={handleToggle}
        style={{ display: changeProfileDisplay ? "block" : "none" }}
        className="close-dropDown"
      ></div>
      {navUserSetting}
    </>
  );
};

export default Menumodules;
