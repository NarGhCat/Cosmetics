import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Eyes from "../Nav/Eyes";
import Face from "../Nav/Face";
import Lips from "../Nav/Lips";

function DiscoverEvenMore() {
  return (
    <Router>
      <div>
        <h1
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "20px",
            fontSize: "40px",
            color: "white"
          }}
        >
          Discover even more
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/lips">
            <div
              className="discoverEvenMore"
              style={{
                background:
                  'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZyje3D3u4iogMKsF36uoZNsAq8X8tycM63A&usqp=CAU")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
              }}
            >
              <span>Lips</span>
            </div>
          </Link>
          <Link to="/face">
            <div
              className="discoverEvenMore"
              style={{
                background:
                  'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bDOoWVcrocLyUU7Lto93btZrfy2d2uKCow&usqp=CAU")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <span>Face</span>
            </div>
          </Link>
          <Link to="/eyes">
            <div
              className="discoverEvenMore"
              style={{
                background:
                  'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vbpVBUKCaPgoNAKOzNXFevdo-G2nDDQw3g&usqp=CAU")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <span>Eyes</span>
            </div>
          </Link>
        </div>
      </div>
      {/* <Switch>
        <Route path="/lips">
          <Lips />
        </Route>
        <Route path="/face">
          <Face />
        </Route>
        <Route path="/eyes">
          <Eyes />
        </Route>
      </Switch> */}
    </Router>
  );
}
export default DiscoverEvenMore;
