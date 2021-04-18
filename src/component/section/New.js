import "../../styles/NewStyle.css";
import React, { useState, useEffect } from "react";
import { selectNews, selectUser } from "../../selectors/fierbase";
import { useSelector, useDispatch } from "react-redux";
import { db, storage } from "../../index";
// import Card from "../shared/Card";
// import Button from "../shared/Button";
// import CardMedia from "../shared/CardMedia";
// import Typography from "../shared/Typography";
// import { Link, useHistory } from "react-router-dom";
import {
  // CardActionArea,
  // CardActions,
  // CardContent,
  makeStyles
} from "@material-ui/core";

import SideBar from "./SideBar";
import { SET_SELECTED_ITEM, SET_USER } from "../../reducer/reducer";
import firebase from "firebase/app";
import { useAlert } from "react-alert";
import Item from "./Item";

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
  }
});

const New = (props) => {
  const brandClasses = useStyles();
  const news = useSelector(selectNews);
  const [imgs, setImgs] = useState([]);

  async function getImgUrl(path) {
    let gsReference = storage.refFromURL(path);
    return gsReference.getDownloadURL();
  }

  const getBrandLogos = async (news) => {
    const imageArray = [];
    news.forEach((item) => {
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
    getBrandLogos(news);
  }, [news]);

  return (
    <div className={brandClasses.brandRoot}>
      <SideBar />
      <div className={brandClasses.brandItem}>
        {news.map((item, i) => (
          <Item key={item.itemId} ind={i} {...item} />
        ))}
      </div>
    </div>
  );
};
export default New;
