import '../../styles/nav.css'
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import wLogo from "../../Pics/white-logo.png";
import NavModules from './NavModules'
import { auth, db } from '../../index'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { SELECTED_CATEGORY, SET_USER } from '../../reducer/reducer'
import { selectCategories } from '../../selectors/fierbase';
function Nav(props) {
  const categories = useSelector(selectCategories)
  const dispatch = useDispatch()
  // const {categories} = props
  const [displayNone, setDisplay] = useState(false)
  const { url } = useRouteMatch()
  const [email, setEmail] = useState('');
  const [uid, setUid] = useState('');
  const [userImg, setImg] = useState('');
  const handleToggle = (e) => {
    setDisplay(displayNone ? false : true)
  }
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
    if (user) {
      setEmail(user.email)
      setUid(user.uid)
      db.collection("users").doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          dispatch({
            type: SET_USER,
            payload: {
              item: doc.data(),
              uid: user.uid
            }
          })
          setImg(doc.data().image)
        }
      })
    }
  });
  }, [])
  
  return (
    <div className='page-navigation'>
      <div className='page-container'>
        <div className='navbar-mobile'></div>
        <div className='navbar-desktop'>
          <Link className='navbar-desktop-a' to="/"><img alt='img' src={wLogo} /></Link>
          <div className='navbar-menu'>
            <Link className='navbar-menu-a' to="/new">New</Link>
            {
              categories.map((category, i) => (
                <Link
                  onClick={() => { dispatch({ type: SELECTED_CATEGORY, payload: category }) }}
                  className='navbar-menu-a'
                  key={i}
                  to={`/categories/${category.name}`}>
                  {category.type}</Link>
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
const mapStateToProps = (state) => ({
  categories: state.categories
})
export default connect(mapStateToProps)(Nav)
