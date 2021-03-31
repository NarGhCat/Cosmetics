import { Link } from "react-router-dom";
import "../../styles/BrandsStyle.css";
const Brands = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to='/brand/Burberry'><div id="Burberry"></div></Link>
        <Link to='/brand/EsteeLauder'><div id="EsteeLauder"></div></Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to='/brand/Dior'><div id="Dior"></div></Link>
        <Link to='/brand/Kylie'><div id="Kylie"></div></Link>
        <Link to='/brand/KKW>'><div id="KKW"></div></Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to='/brand/Mac'><div id="Mac"></div></Link>
        <Link to='/brand/Clinique'><div id="Clinique"></div></Link>
      </div>
    </>
  );
}
export default Brands;

