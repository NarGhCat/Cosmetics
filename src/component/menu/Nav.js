
import '../../styles/nav.css'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import wLogo from "../../Pics/white-logo.png";
import NavModules from './NavModules'
import { auth,db } from '../../index'
function Nav() {
  const [displayNone, setDisplay] = useState(false)
  const [email, setEmail] = useState('');
  const [uid, setUid] = useState('');
  const [userImg, setImg] = useState('');
  const handleToggle = (e) => {
    setDisplay(displayNone ? false : true)
  }
  auth.onAuthStateChanged(function (user) {
    if (user) {
      setEmail(user.email)
      setUid(user.uid)
      db.collection("users").doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          setImg(doc.data().image)
        } 
      })
    }
  });
  return (
    <div className='page-navigation'>
      <div className='page-container'>
        <div className='navbar-mobile'></div>
        <div className='navbar-desktop'>
          <Link className='navbar-desktop-a' to="/"><img alt='img' src={wLogo} /></Link>
          <div className='navbar-menu'>
            <Link className='navbar-menu-a' to="/new">New</Link>
            <Link className='navbar-menu-a' to="/lips">Lips</Link>
            <Link className='navbar-menu-a' to="/face">Face</Link>
            <Link className='navbar-menu-a' to="/eyes">Eyes</Link>
            <Link className='navbar-menu-a' to="/brushes">Brushes</Link>
            <Link className='navbar-menu-a' to="/skin">Skin</Link>
            <Link className='navbar-menu-a' to="/bestSellers">BEST-SELLERS</Link>
            <Link className='navbar-menu-a' to="/brands">Brands</Link>
          </div>
          <div className='profile-items'>
            <span onClick={handleToggle} id='profile-items' className='profile-items-span'>{(email ? email : 'My account')} </span>


          </div>
          <div className="profile-items">{manuUserSeting}</div>
        </div>

        <NavModules changeProfileDisplay={displayNone} handleToggle={handleToggle} userImg={userImg} email={email} uid={uid}/>

      </div>
    </div>
  );
}
export default Nav;
