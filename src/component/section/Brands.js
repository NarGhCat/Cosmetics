import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch
} from "react-router-dom";
import "../../styles/BrandsStyle.css";
import Burberry from "../brands/Burberry";
import Clinique from "../brands/Clinique";
import Dior from "../brands/Dior";
import EsteeLauder from "../brands/EsteeLauder";
import KKW from "../brands/KKW";
import Kylie from "../brands/Kylie";
import Mac from "../brands/Mac";
import Nav from "../menu/Nav";
import Footer from "../section/Footer";

function Brands() {
  let match = useRouteMatch();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`${match.url}/Burberry`}>
          <div id="Burberry"></div>
        </Link>
        <Link to={`${match.url}/EsteeLauder`}>
          <div id="EsteeLauder"></div>
        </Link>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`${match.url}/Dior`}>
          <div id="Dior"></div>
        </Link>
        <Link to={`${match.url}/Kylie`}>
          <div id="Kylie"></div>
        </Link>
        <Link to={`${match.url}/KKW`}>
          <div id="KKW"></div>
        </Link>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`${match.url}/Mac`}>
          <div id="Mac"></div>
        </Link>
        <Link to={`${match.url}/Clinique`}>
          <div id="Clinique"></div>
        </Link>
      </div>

      <Switch>
        <Nav />
        <Route path={`${match.path}/:Burberry`}>
          <Burberry />
        </Route>
        <Route path="/brands/esteeLauder">
          <EsteeLauder />
        </Route>
        <Route path="/brands/dior">
          <Dior />
        </Route>
        <Route path="/brands/kylie">
          <Kylie />
        </Route>
        <Route path="/brands/KKW">
          <KKW />
        </Route>
        <Route path="/brands/mac">
          <Mac />
        </Route>
        <Route path="/brands/clinique">
          <Clinique />
        </Route>
        <Footer />
      </Switch>
    </>
  );
}
// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }
export default Brands;
