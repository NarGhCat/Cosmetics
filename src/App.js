import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useState, useEffect } from "react";
import New from "./component/section/New";
import Lips from "./component/section/Lips";
import Face from "./component/section/Face";
import Eyes from "./component/section/Eyes";
import Brushes from "./component/section/Brushes";
import Skin from "./component/section/Skin";
import Brands from "./component/section/Brands";
import Nav from "./component/menu/Nav";
import Main from "./component/section/Main";
import Footer from "./component/section/Footer";
import Login from "./component/menu/Login";
import Signup from "./component/menu/Signup";
import Brand from "./component/section/Brand";
import { db, storage } from "./index";
// import Brand from "./Brand"

import { useDispatch } from 'react-redux'
import Bag from "./component/menu/Bag";
import { SET_BRANDS, SET_CATEGORY, SET_ITEMS } from './reducer/reducer'
import Category from "./component/section/Category";

export default function App() {
  const dispatch = useDispatch();
  let brandState = [];
  useEffect(() => {
    db.collection("brands").get().then((doc) => {
      doc.forEach((brand) => {
        brandState.push({
          brandId: brand.id,
          ...brand.data()
        })
      })
      dispatch({
        type: SET_BRANDS,
        payload: brandState
      })
    })
  }, [])
  let categoryState = []
  useEffect(() => {
    db.collection("category").get().then((doc) => {
      doc.forEach((category) => {
        categoryState.push({
          categoryId: category.id,
          ...category.data()
        })
      })
      dispatch({
        type: SET_CATEGORY,
        payload: categoryState
      })
    })
  }, [])
  let itemsState = []
  db.collection("items").get().then((querySnapshot) => {
    querySnapshot.forEach((item) => {
      itemsState.push({
        itemId: item.id,
        ...item.data()
      })
    });
    dispatch({
      type: SET_ITEMS,
      payload: itemsState
    })
  })

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/new" component={New} />
          {/* <Route path="/lips" component={Lips} />
          <Route path="/face" component={Face} />
          <Route path="/eyes" component={Eyes} />
          <Route path="/brushes" component={Brushes} />
          <Route path="/skin" component={Skin} /> */}
          <Route path="/bag" component={Bag} />
          <Route exact path="/brands" component={Brands} />
          <Route path="/login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route exact path="/categories/:category_url" component={Category} />
          <Route path='/brands/:brand_url' component={Brand} />
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Main}>
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
