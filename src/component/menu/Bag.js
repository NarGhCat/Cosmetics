import React, { useEffect, useState } from "react";
import "../../styles/bag.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../selectors/fierbase";
import BagItem from "./BagItem";
import {
  Button,
  CardActions,
  CardContent,
  Card,
  Typography
} from "@material-ui/core";

import { useStylesForBag } from "./BagStyles";

const Bag = () => {
  const user = useSelector(selectUser);
  const classes = useStylesForBag();
  const [bag, setBag] = useState([]);
  useEffect(() => {
    if (user.item) {
      setBag(user.item.bag);
    }
  }, [user]);
  return (
    <div className={classes.bagComponent}>
      <div className={classes.bagHeader}>
        <h1> SHOPPTING BAG {} </h1>
      </div>
      <div className={classes.paper}>
        <div className={`${classes.leftContent} for-scroll`}>
          <div className={classes.bagItems}>
            {bag.map((item, i) => (
              <BagItem key={i} ind={i} {...item} />
            ))}
          </div>
        </div>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              ORDER SUMMARY
            </Typography>
            <br />
            <Typography className={classes.pos} component="h3">
              SUBTOTAL
            </Typography>
            <Typography className={classes.pos} component="p">
              SHIPPING
            </Typography>
            <Typography className={classes.pos} component="p">
              ESTIMATED TOTAL
            </Typography>
          </CardContent>
          <CardActions style={{ border: "1px solid black" }}>
            <Link to="/bag/payment">
              <Button size="small">CLICK TO ORDER</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Bag;
