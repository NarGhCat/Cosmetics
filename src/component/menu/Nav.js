import '../../styles/nav.css'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import wLogo from "../../Pics/white-logo.png";
import NavModules from './NavModules'
import { auth, db } from '../../index'
import store from '../../reducer/indexStore'
function Nav() {
  const categories = store.getState().categories
  const [displayNone, setDisplay] = useState(false)
  const [email, setEmail] = useState('');
  const [uid, setUid] = useState('');
  const [userImg, setImg] = useState('');
  const [categoriesSate,setCategoriesSate] = useState([])
  const handleToggle = (e) => {
    setDisplay(displayNone ? false : true)
  }
  auth.onAuthStateChanged( (user) =>{
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
  useEffect(()=>{
    setCategoriesSate(categories)
    console.log(categoriesSate)
  },[categoriesSate])
  return (
    <div className='page-navigation'>
      <div className='page-container'>
        <div className='navbar-mobile'></div>
        <div className='navbar-desktop'>
          <Link className='navbar-desktop-a' to="/"><img alt='img' src={wLogo} /></Link>
          <div className='navbar-menu'>
            <Link className='navbar-menu-a' to="/new">New</Link>
            {
              categoriesSate.map((category,i) => (
                <Link className='navbar-menu-a' key={i} to={`/${category.type}`}>{category.type}</Link>
                // console.log(category)
              ))
            }
            <Link className='navbar-menu-a' to="/brands">Brands</Link>
          </div>
          <div className='profile-items'>
            <span onClick={handleToggle} id='profile-items' className='profile-items-span'>{(email ? email : 'My account')} </span>

          </div>
        </div>
        <NavModules changeProfileDisplay={displayNone} handleToggle={handleToggle} userImg={userImg} email={email} uid={uid} />
      </div>

      <Link className='navbar-menu-a' to="/bag">Bag</Link>
    </div>

  )
}
export default Nav;
