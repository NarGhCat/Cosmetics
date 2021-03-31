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
// import Form from "./Nav/Login/LoginInput";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/new">
            <Nav />
            <New />
            <Footer />
          </Route>
          <Route path="/lips">
            <Nav />
            <Lips />
            <Footer />
          </Route>
          <Route path="/face">
            <Nav />
            <Face />
            <Footer />
          </Route>
          <Route path="/eyes">
            <Nav />
            <Eyes />
            <Footer />
          </Route>
          <Route path="/brushes">
            <Nav />
            <Brushes />
            <Footer />
          </Route>
          <Route path="/skin">
            <Nav />
            <Skin />
            <Footer />
          </Route>
          <Route path="/bestSellers">
            <Nav />
            <BestSellers />
            <Footer />
          </Route>
          <Route path="/brands">
            <Nav />
            <Brands />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Nav />
            <Main />
            <Footer />
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
