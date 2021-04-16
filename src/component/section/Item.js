import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { db, storage } from "../..";
import firebase from "firebase/app";
import "firebase/firestore";
import { selectUser } from "../../selectors/fierbase";
import { SET_SELECTED_ITEM, SET_USER } from "../../reducer/reducer";
import { useAlert } from 'react-alert'

const useStyles = makeStyles({
  new: {
    float: "right",
    color: "red",
  },
  card: {
    boxShadow: "0 0 6px 2px #f500cb87",
  },
});

const Item = (props) => {
  const classes = useStyles();
  const alertDraft = useAlert();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const [img, setImg] = useState("");
  const [alertMessage, setAlert] = useState("");
  const { name, price, photo, status } = props;
  const getBrandLogo = async (photo) => {
    let data = await storage.refFromURL(photo).getDownloadURL();
    setImg(data);
  };
  useEffect(() => {
    getBrandLogo(photo);
  }, [photo]);

  function handleAddToBagItem(item, user) {
    if (user.data) {
      db.collection("users")
        .doc(user.uid)
        .update({
          bag: firebase.firestore.FieldValue.arrayUnion(item),
        }).then(() => {
          setUser.data.bag.push(item)
          dispatch({
            type: SET_USER,
            payload: setUser
          })
          alertDraft.show(<div style={{ color: 'white', fontSize: '12px' }}>successfully added to bag</div>)
        })
    } else {
      history.push('/login')
    }
  }

  function handleLearnMore(item) {
    dispatch({
      type: SET_SELECTED_ITEM,
      payload: item,
    });
  }
  return (
    <Card className={classes.card} >
      <Typography className={classes.new}>{status}</Typography>
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
          onClick={() => { handleAddToBagItem({ ...props }, user); }}
        >
          {" "}
          Add to Bag
        </Button>
        <Link to="/clickedItem">
          <Button
            bgColor="white"
            labelcolor="#4c003f"
            width="140px"
            border="none"
            onClick={() => handleLearnMore({ ...props })}
          >
            {" "}
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default Item;
