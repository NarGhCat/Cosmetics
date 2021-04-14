import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import New from "./component/section/New";
import Brands from "./component/section/Brands";
import Nav from "./component/menu/Nav";
import Main from "./component/section/Main";
import Footer from "./component/section/Footer";
import Login from "./component/menu/Login";
import Signup from "./component/menu/Signup";
import Brand from "./component/section/Brand";
import { db, storage } from "./index";
// import Brand from "./Brand"

import { useDispatch } from "react-redux";
import Bag from "./component/menu/Bag";
import { SET_BRANDS, SET_CATEGORY, SET_ITEMS } from "./reducer/reducer";
import Payment from "./component/section/Payment";
import Category from "./component/section/Category";
import LearnMore from "./component/section/LearnMore";

export default function App() {
  const dispatch = useDispatch();
  let brandState = [];
  useEffect(() => {
    db.collection("brands")
      .get()
      .then((doc) => {
        doc.forEach((brand) => {
          brandState.push({
            brandId: brand.id,
            ...brand.data(),
          });
          console.log('brands')
        });
        dispatch({
          type: SET_BRANDS,
          payload: brandState,
        });
      });
  }, []);
  let categoryState = [];
  useEffect(() => {
    db.collection("category")
      .get()
      .then((doc) => {
        doc.forEach((category) => {
          categoryState.push({
            categoryId: category.id,
            ...category.data(),
          });
          console.log('category')
        });
        dispatch({
          type: SET_CATEGORY,
          payload: categoryState,
        });
      });
  }, []);
  let itemsState = [];
  useEffect(() => {
    db.collection("items")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((item) => {
          itemsState.push({
            itemId: item.id,
            ...item.data(),
          });
          console.log('items')
        });
        dispatch({
          type: SET_ITEMS,
          payload: itemsState,
        });
      });
  }, []);
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/new" component={New} />
          <Route path="/categories/:categoryUrl" component={Category} />
          <Route exact path="/brands" component={Brands} />
          <Route path="/brands/:brandUrl" component={Brand} />
          <Route exact path="/bag" component={Bag} />
          <Route path="/bag/payment" component={Payment} />
          <Route path="/login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/clickedItem" component={LearnMore} />
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
