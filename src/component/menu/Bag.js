import React, { useEffect, useState } from "react";
import "../../styles/bag.css";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../selectors/fierbase";
import BagItem from "./BagItem";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useStylesForBag } from "./BagStyles";
import produce from "immer";

const Bag = () => {
  const user = useSelector(selectUser);
  const classes = useStylesForBag();
  const [bag, setBag] = useState([]);
  const [totalPrice, setTotalPrice] = useState([])
  const emptyBag = (
    <div className={classes.emptyBag}>
      <h1 className={classes.emptyBagTitle}>Bag is Empty</h1>
    </div>
  )
  useEffect(() => {
    if (user.data) {
      let clonedUserBag = produce(user, (draftUser) => {
        return draftUser.data.bag
      });
      setBag(clonedUserBag);
      let setPrice = 0
      clonedUserBag.map((item) => {
        setPrice += item.price
      })
      setTotalPrice(setPrice)
    }
  }, [user]);
  return (
    <div className={classes.bagComponent}>
      <div className={classes.bagHeader}>
        <h1> SHOPPTING BAG { } </h1>
      </div>
      <div className={classes.paper}>
        <div className={`${classes.leftContent} for-scroll`}>
          <div className={classes.bagItems}>
            {(bag.length ? bag.map((item, i) => (
              <BagItem key={item.itemId} ind={i} {...item} />
            )) : emptyBag)}
          </div>
        </div>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              ORDER SUMMARY
            </Typography>
            < br />
            <Typography component="h3">
              SUBTOTAL
            </Typography>
            <Typography component="p">
              SHIPPING
            </Typography>
            <Typography component="p">
              ESTIMATED TOTAL
            </Typography>
            <Typography component="p">
              Total price - $ {totalPrice}
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
