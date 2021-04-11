import "../../styles/styles.css";
import faceLogo from "../../Pics/icons/facebook.png";
import instaLogo from "../../Pics/icons/instagram.png";
import youtubeLogo from "../../Pics/icons/youtube.png";
import { Link } from "react-router-dom";
import store from "../../reducer/indexStore";
function Footer() {
  const brands = store.getState().brands;
  return (
    <footer style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ margin: "50px 150px 50px 150px" }}>
        <h2 style={{ color: "white" }}>PRODUCTS</h2>
        <Link to="/brands/burberry">
          <li className="footerItem">Burberry</li>
        </Link>
        <Link to="/brands/esteeLauder">
          <li className="footerItem">Estee Lauder</li>
        </Link>
        <Link to="/brands/dior">
          <li className="footerItem">Dior</li>
        </Link>
        <Link to="/brands/kylie">
          <li className="footerItem">Kylie</li>
        </Link>
        <Link to="/brands/KKW">
          {" "}
          <li className="footerItem">KKW</li>
        </Link>
        <Link to="/brands/Mac">
          {" "}
          <li className="footerItem">Mac</li>
        </Link>
        <Link to="/brands/clinique">
          {" "}
          <li className="footerItem">Clinique</li>
        </Link>
      </div>

      <div style={{ margin: "50px 150px 50px 150px" }}>
        <h2 style={{ color: "white" }}>CONNECT</h2>
        <li className="footerItem">
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instaLogo} className="logos" />
          </a>
        </li>
        <li className="footerItem">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={faceLogo} className="logos" />
          </a>
        </li>
        <li className="footerItem">
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtubeLogo} className="logos" />
          </a>
        </li>
      </div>

      <div style={{ margin: "50px 150px 50px 150px" }}>
        <h2 style={{ color: "white" }}>ACCOUNT</h2>
        <Link to="login">
          <li className="footerItem">My Account</li>
        </Link>
        <li className="footerItem">Order Status</li>
        <li className="footerItem">My Favourites</li>
      </div>
    </footer>
  );
}
export default Footer;
