import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {  useEffect } from "react";
import New from "./component/section/New";
import Brands from "./component/section/Brands";
import Nav from "./component/menu/Nav";
import Main from "./component/section/Main";
import Footer from "./component/section/Footer";
import Login from "./component/menu/Login";
import Signup from "./component/menu/Signup";
import Brand from "./component/section/Brand";
import { useDispatch } from "react-redux";
import Bag from "./component/menu/Bag";
import Payment from "./component/section/Payment";
import Category from "./component/section/Category";
import LearnMore from "./component/section/LearnMore";
import { getBrandsFromDb, getCategoryFromDb, getItemsFromDb } from './FireBase'
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getBrandsFromDb(dispatch)
  }, []);
  useEffect(() => {
    getCategoryFromDb(dispatch)
  }, []);
  useEffect(() => {
    getItemsFromDb(dispatch)
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
