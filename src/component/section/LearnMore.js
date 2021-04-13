import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from '@material-ui/core/Button';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { selectedItem, selectItems, selectUser } from "../../selectors/fierbase";
import { useSelector } from "react-redux";
import { db, storage } from "../..";
import { useParams } from "react-router";
import firebase from "firebase/app";
import "firebase/firestore";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "50%",
    maxHeight: 1500,
  },
  image: {
    width: 300,
    height: 500,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  button: {
    margin: theme.spacing(10, 0,0 ,0),
    width: 250
  },
}));


const LearnMore = () => {
  const classes = useStyles();
  const clickItem = useSelector(selectedItem);
  const user = useSelector(selectUser);
  const [img, setImg] = useState("");
  const { brandUrl } = useParams();

  // console.log(clickItem)
  
  async function getImgUrl(path) {
    let gsReference = storage.refFromURL(path);
    return gsReference.getDownloadURL();
  }
  const getBrandLogos = async (clickItem) => {
    const data = await getImgUrl(clickItem.photo);
    setImg(data);
  };
  useEffect(() => {
    getBrandLogos(clickItem);
  }, [clickItem]);


  // function handleClickedItem(item, user) {
  //   db.collection("users")
  //     .doc(user.uid)
  //     .update({
  //       bag: firebase.firestore.FieldValue.arrayUnion(item),
  //     });
  // }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                  {clickItem.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Brand
                </Typography>
                <br />
                <Typography variant="subtitle1">$ {clickItem.price}</Typography>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                // onClick={() => handleClickedItem({ ...props }, user)}
              >
                ADD TO BAG
              </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LearnMore;
