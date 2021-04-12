import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import firebase from 'firebase/app';
import 'firebase/firestore';
import { selectUser } from "../../selectors/fierbase";
const useStyles = makeStyles({
  new: {
    float: "right",
    color: 'red'
  },
  card: {
    boxShadow: '0 0 6px 2px #f500cb87'
  }
});

const Item = (props) => {
  const classes = useStyles();
  const user = useSelector(selectUser)
  const [img, setImg] = useState('');
  const { ind, name, price, photo, status, url } = props
  console.log(url)
  async function getImgUrl(path) {
    let gsReference = storage.refFromURL(path);
    return gsReference.getDownloadURL();
  }
  const getBrandLogos = async (item) => {
    const data = await getImgUrl(item);
    setImg(data)
  };
  useEffect(() => {
    getBrandLogos(photo);
  }, []);
  function handleClickedItem(item, user) {
    db.collection("users").doc(user.uid).update({
      bag: firebase.firestore.FieldValue.arrayUnion(item)
    })
  }
  console.log(img)
  return (
    <Card className={classes.card} key={ind}>
      <Typography>brand - {url}</Typography>
      <Typography className={classes.new} >{status}</Typography>
      <CardActionArea>
        <CardMedia img={img} />

        <CardContent>
          <Typography>{name}</Typography>
          <Typography>$ {price}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          bgColor="white"
          labelcolor="#4c003f"
          width="140px"
          border="none"
          onClick={() => handleClickedItem({ ...props }, user)}
        > Add to Bag
                </Button>
        <Button
          bgColor="white"
          labelcolor="#4c003f"
          width="140px"
          border="none"
        > Learn More
                </Button>
      </CardActions>
    </Card>
  );
};
export default Item;