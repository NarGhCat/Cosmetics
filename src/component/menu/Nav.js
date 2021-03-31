// import "../../styles/styles.css";
import '../../styles/nav.css'
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import wLogo from "../../Pics/white-logo.png";
import Navmodules from './Navmodules'
import { useHistory } from "react-router-dom";
import { auth } from '../../index'
function Nav(props) {
  const [displayNone, setDisplay] = useState('none')
  const handleToggle = (e) => {
    if (displayNone === 'block') {
      setDisplay('none')
    } else {
      setDisplay('block')
    }

  }

  var user = auth.currentUser;
  var name, email, photoUrl, uid, emailVerified;
  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
  }
 
 console.log(name, email, photoUrl, uid, emailVerified)
 

 

  let manuUserSeting;

  if (email) {

    manuUserSeting = <span onClick={handleToggle} id='profile-items' className='profile-items-span'>{email} </span>
  } else {
    manuUserSeting = <span onClick={handleToggle} id='profile-items' className='profile-items-span' >My account</span>
  }
  const history = useHistory()
  const kkk = () => {

    history.push('/eyes')
    return (
      <h1> heeelloooo neeeww</h1>
    )

  }
  return (

      <div className='page-navigation'>
        <div className='page-container'>
          <div className='navbar-mobile'></div>
          <div className='navbar-desktop'>
            <a className='navbar-desktop-a' href="/"><img alt='img' src={wLogo} /></a>
            <div className='navbar-menu'>

              <a onClick={kkk}>asdasd</a>
              <Link className='navbar-menu-a' to="/new">
                New
                </Link>
              <Link className='navbar-menu-a' to="/lips">
                Lips
                </Link>
              <Link className='navbar-menu-a' to="/face">
                Face
                </Link>
              <Link className='navbar-menu-a' to="/eyes">
                Eyes
                </Link>
              <Link className='navbar-menu-a' to="/brushes">
                Brushes
                </Link>
              <Link className='navbar-menu-a' to="/skin">
                Skin
                </Link>
              <Link className='navbar-menu-a' to="/bestSellers">
                BEST-SELLERS
                </Link>
              <Link className='navbar-menu-a' to="/brands">
                Brands
                </Link>

            </div>
            <div className='profile-items'>
              {manuUserSeting}
            </div>
          </div>
          <Navmodules changeProfileDisplay={displayNone} handleToggle={handleToggle} />
        </div>

      </div>

  )
}
export default Nav;
