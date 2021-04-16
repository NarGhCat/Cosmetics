import "../../styles/NewStyle.css";
import React, { useState, useEffect } from "react";
import { selectNews } from "../../selectors/fierbase";
import { useSelector } from "react-redux";
import { storage } from "../../index";
import Card from "../shared/Card";
import Button from "../shared/Button";
import CardMedia from "../shared/CardMedia";
import Typography from "../shared/Typography";
import {
  CardActionArea,
  CardActions,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
const useStyles = makeStyles({
  brandRoot: {
    display: "flex",
    width: 95 + "%",
    margin: "auto",
    justifyContent: "space-between",
  },
  brandItem: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "space-between",
    width: 82 + "%",
  },
});

const New = () => {
  const brandClasses = useStyles();
  const news = useSelector(selectNews);
  const { brandUrl } = useParams();
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
        {news.map((item, i) =>
          item.brandId.id ? (
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
export default New;
