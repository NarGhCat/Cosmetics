import { Link } from "react-router-dom";
import "../../styles/BrandsStyle.css";
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
  brandLinkLabel : {
    fontSize : ({l}) => l> 5 ? 18 : 15
  }
}) 
const Brands = () => {
   // brands is an array of all brands 
    // const brands = useSelector(selectAllBrands)
   const brands = ["Dior", "Chanel"]
  const classes = useStyles({l : brands.length})
  return (
    <>
      {brands.map(brand => (
        <Link to={`/brand/${brand}`}><div className={classes.brandLinkLabel}>{brand}</div></Link>
      ))}

      {/* <div style={{ display: "flex", justifyContent: "center" }}>
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
      </div> */}
    </>
  );
}
export default Brands;

