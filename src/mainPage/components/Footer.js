import "../../styles.css";
import faceLogo from "../../Pics/facebook.png";
import instaLogo from "../../Pics/instagram.png";
import youtubeLogo from "../../Pics/youtube.png";

function Footer() {
  return (
    <footer style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ margin: "50px 150px 50px 150px" }}>
        <h2 style={{ color: "white" }}>PRODUCTS</h2>
        <li className="footerItem">Lips</li>
        <li className="footerItem">Face</li>
        <li className="footerItem">Eyes</li>
        <li className="footerItem">Brushes</li>
        <li className="footerItem">Skin</li>
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
        <li className="footerItem">My Account</li>
        <li className="footerItem">Order Status</li>
        <li className="footerItem">My Favourites</li>
      </div>
    </footer>
  );
}
export default Footer;
