import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import New from "./component/section/New";
import Lips from "./component/section/Lips";
import Face from "./component/section/Face";
import Eyes from "./component/section/Eyes";
import Brushes from "./component/section/Brushes";
import Skin from "./component/section/Skin";
import BestSellers from "./component/section/BestSellers";
import Brands from "./component/section/Brands";
import Nav from "./component/menu/Nav";
import Main from "./component/section/Main";
import Footer from "./component/section/Footer";
import Login from "./component/menu/Login";
import Signup from "./component/menu/Signup";
// import Form from "./Nav/Login/LoginInput";

import Burberry from "./component/brands/Burberry";
import Clinique from "./component/brands/Clinique";
import Dior from "./component/brands/Dior";
import EsteeLauder from "./component/brands/EsteeLauder";
import KKW from "./component/brands/KKW";
import Kylie from "./component/brands/Kylie";
import Mac from "./component/brands/Mac";

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/new" component={New} />
          <Route path="/lips" component={Lips} />
          <Route path="/face" component={Face} />
          <Route path="/eyes" component={Eyes} />
          <Route path="/brushes" component={Brushes} />
          <Route path="/skin" component={Skin} />
          <Route path="/bestSellers" component={BestSellers} />
          <Route path="/brands" component={Brands} />
          <Route path="/login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path='/brand/Mac' component={Mac} />
          <Route path='/brand/Burberry' component={Burberry} />
          <Route path='/brand/Clinique' component={Clinique} />
          <Route path='/brand/Dior' component={Dior} />
          <Route path='/brand/EsteeLauder' component={EsteeLauder} />
          <Route path='/brand/KKW' component={KKW} />
          <Route path='/brand/Kylie' component={Kylie} />
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


  // hello yellow