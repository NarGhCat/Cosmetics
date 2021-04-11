import React, { useState, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../shared/Card";
import Button from "../shared/Button";
import CardMedia from "../shared/CardMedia";
import Typography from "../shared/Typography";
import {
  CardActionArea,
  CardActions,
  CardContent,
  makeStyles
} from "@material-ui/core";
import { db, storage } from "../..";
import firebase from "firebase/app";

import {
  selectBrands,
  selectItems,
  selectBrand,
  selectUid,
  selectUser
} from "../../selectors/fierbase";
const useStyles = makeStyles({
  brandRoot: {
    display: "flex",
    width: 95 + "%",
    margin: "auto",
    justifyContent: "space-between"
  },
  brandItem: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "space-between",
    width: 82 + "%"
  },
  brandSidebar: {
    width: 220,
    background:
      "radial-gradient(ellipse farthest-side at left top, #a27b9cf5 53%, rgb(255 255 255) 100%)"
  },
  brandsSelector: {
    margin: 10 + "px auto",
    width: 90 + "%"
  },
  brands: {
    marginTop: 12
  },
  h3: {
    borderBottom: 1 + "px solid black",
    fontSize: 25
  },
  p: {
    marginTop: 10,
    cursor: "pointer",
    fontWeight: 600
  }
});

const Brand = (props) => {
  const user = useSelector(selectUser);
  const brandClasses = useStyles();
  const items = useSelector(selectItems);
  const brands = useSelector(selectBrands);
  const selectedBrand = useSelector(selectBrand);
  const { brandUrl } = useParams();
  const [imgs, setImgs] = useState([]);
  async function getImgUrl(path) {
    let gsReference = storage.refFromURL(path);
    return gsReference.getDownloadURL();
  }

  const getBrandLogos = async (items) => {
    const imageArray = [];
    items.forEach((item) => {
      imageArray.push(getImgUrl(item.photo));
    });
    const data = await Promise.allSettled(imageArray);
    const asd = data.map((d, i) => {
      if (d.status === "fulfilled") {
        return d.value;
      } else {
        return undefined;
      }
    });
    setImgs(asd);
  };
  useEffect(() => {
    getBrandLogos(items);
  }, [items]);

  const handleClickedItem = (item, user) => {
    console.log(item, user);
    db.collection("users")
      .doc(user.uid)
      .update({
        bag: firebase.firestore.FieldValue.arrayUnion(item)
      });
  };

  return (
    <div className={brandClasses.brandRoot}>
      <div className={brandClasses.brandSidebar}>
        <div className={brandClasses.brandsSelector}>
          <h3 className={brandClasses.h3}>Brands</h3>
          <div className={brandClasses.brands}>
            {brands.map((brand, i) => (
              <p key={i} className={brandClasses.p}>
                {brand.label}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={brandClasses.brandItem}>
        {items.map((item, i) =>
          selectedBrand.brandId === item.brandId.id ? (
            <Card key={i}>
              <Typography>{brandUrl}</Typography>
              <CardActionArea>
                <CardMedia image={imgs[i]} />
                <CardContent>
                  <Typography>{item.name}</Typography>
                  <Typography>$ {item.price}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  bgColor="white"
                  labelcolor="#4c003f"
                  width="140px"
                  border="none"
                  {...item}
                  onClick={() => handleClickedItem({ ...item }, user)}
                >
                  {" "}
                  Add to Bag
                </Button>

                <Button
                  bgColor="white"
                  labelcolor="#4c003f"
                  width="140px"
                  border="none"
                >
                  {" "}
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};
export default Brand;
