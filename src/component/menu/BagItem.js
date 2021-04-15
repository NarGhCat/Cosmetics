import React, { useState, useEffect, Fragment } from "react";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Divider,
  Button,
  AccordionDetails,
  Accordion,
  Chip,
  Typography,
  AccordionActions,
  AccordionSummary
} from "@material-ui/core";
import { useStylesForBagItem } from "./BagStyles";
import { db, storage } from "../..";
import firebase from "firebase/app";
import "firebase/firestore";
import { selectUser } from "../../selectors/fierbase";
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";

const BagItem = (props) => {
  const classes = useStylesForBagItem();
  const { ind, name, price, photo } = props;
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
  }, []);

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
    </div>
  );
};
export default BagItem;
