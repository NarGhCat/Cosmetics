import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
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
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { deletedFromBagAlert } from "../section/Alert.js";
const BagItem = (props) => {
  const classes = useStylesForBagItem();
  const { ind, name, price, photo, status, url, itemId } = props;
  const user = useSelector(selectUser);
  const [alertMessage, setAlert] = useState("");
  const [img, setImg] = useState("");
  const alert = useAlert();
  const getBrandLogo = async (photo) => {
    let data = await storage.refFromURL(photo).getDownloadURL();
    setImg(data);
  };
  useEffect(() => {
    getBrandLogo(photo);
    console.log("item-photo");
  }, []);
  console.log(user);
  function handleDeleteFromBag(ind, user) {
    db.collection("users")
      .doc(user.uid)
      .update({
        bag: firebase.firestore.FieldValue.arrayRemove(user.item.bag[ind])
      })
      .then(() => {
        setAlert("Successfully deleted");
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
                <img className={classes.img} src={img} />
              </div>
            </div>
            <div className={classes.column}>
              <Chip label="Barbados" onDelete={() => {}} />
            </div>
            <div className={clsx(classes.column, classes.helper)}>
              <Typography variant="caption">
                Select your destination of choice
                <br />
                <a
                  href="#secondary-heading-and-columns"
                  className={classes.link}
                >
                  Learn more
                </a>
              </Typography>
            </div>
          </AccordionDetails>
          <Divider />
          <AccordionActions>
            <Button
              size="small"
              onClick={() => {
                handleDeleteFromBag(ind, user);
                alert.show(
                  <div style={{ color: "white", fontSize: "12px" }}>
                    {alertMessage}
                  </div>
                );
              }}
              color="primary"
            >
              Remove from bag
            </Button>
          </AccordionActions>
        </Accordion>
      </Fragment>
      {/* {alert} */}
    </div>
  );
};
export default BagItem;
