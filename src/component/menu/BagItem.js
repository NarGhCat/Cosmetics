import React, { useState, useEffect, Fragment } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { useStylesForBagItem } from "./BagStyles";
import { db, storage } from "../..";
import firebase from "firebase/app";
import "firebase/firestore";
import { selectUser } from "../../selectors/fierbase";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import produce from "immer";
import { SET_SELECTED_ITEM, SET_USER } from "../../reducer/reducer";
const BagItem = (props) => {
  const dispatch = useDispatch()
  const classes = useStylesForBagItem();
  const { ind, name, price, photo } = props;
  const user = useSelector(selectUser);
  const [img, setImg] = useState("");
  const alert = useAlert();
  const getBrandLogo = async (photo) => {
    let data = await storage.refFromURL(photo).getDownloadURL();
    setImg(data);
  };
  useEffect(() => {
    getBrandLogo(photo);
  }, [photo]);

  function handleDeleteFromBag(ind, user) {
    db.collection("users")
      .doc(user.uid)
      .update({
        bag: firebase.firestore.FieldValue.arrayRemove(user.data.bag[ind]),
      })
      .then(() => {
        let payload = produce(user, (draftUser) => {
          draftUser.data.bag.splice(ind, 1);
        });
        dispatch({
          type: SET_USER,
          payload
        });
        alert.show(<div style={{ color: "white", fontSize: "12px" }}>'Successfully deleted !'</div>)
      });
  }
  function handleLearnMore(item) {
    dispatch({
      type: SET_SELECTED_ITEM,
      payload: item
    });
  }
  return (
    <div className={classes.root}>
      <Fragment>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className={classes.column}>
              <Typography className={classes.heading}>{name}</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                $ {price}
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <div className={classes.column}>
              <div className={classes.imgDiv}>
                <img className={classes.img} src={img} alt="" />
              </div>
            </div>
            <div className={classes.column}>
              <Chip label="Remove from bag" onClick={() => {
                handleDeleteFromBag(ind, user);
                ;
              }} />
            </div>
            <div className={clsx(classes.column, classes.helper)}>
              <Typography variant="caption">
                Select your destination of choice
                <br />
              </Typography>
            </div>
          </AccordionDetails>
          <Divider />
          <AccordionActions>
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
          </AccordionActions>
        </Accordion>
      </Fragment>
      {/* {alert} */}
    </div>
  );
};
export default BagItem;
