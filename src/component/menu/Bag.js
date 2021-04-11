import React, { useEffect, useState } from "react";
import "../../styles/bag.css";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import TextField from "@material-ui/core/TextField";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../selectors/fierbase";
import { db } from "../..";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0),
      width: "20ch",
      defaultValue: 1,
    },
  },
}));

const Bag = () => {
  const [displayNone, setDisplay] = useState(false);
  const user = useSelector(selectUser);
  const { path, url } = useRouteMatch();
  const classes = useStyles();
  const handleAfterpay = (e) => {
    setDisplay(displayNone ? false : true);
  };
  const [bag, setBag] = useState([]);
  useEffect(() => {
    setBag(user.item.bag);
  }, []);
  console.log(bag);

  const [price, setPrice] = useState(0)
//  useEffect(() => {
//      const finalPrice = (bag) => {
//         let result = 0
//         bag.map((bagItem) => {
//             result+= bagItem.price
//         })
//         return result
//      }
//      setPrice(finalPrice)
//  },[user.item.bag])

  //       dispatch({
  //         type: SET_CATEGORY,
  //         payload: categoryState
  //       })
  //     })
  //   }, [])

  return (
    <div className="bag-component">
      <div className="bag-component-heading">
        <h1> SHOPPTING BAG {} </h1>
      </div>
      <span className="bag-component-left">
        <div className="bag-component-left-items">
          <div className={classes.root}>
            {bag.map((bag, i) => (
              <div key={i} className="">
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img
                          className={classes.img}
                          alt="complex"
                          src="/static/images/grid/complex.jpg"
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            Brand Name
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {bag.name}
                          </Typography>
                          <TextField
                            id="standard-number"
                            label="Quantity"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body2"
                            style={{ cursor: "pointer" }}
                          >
                            Remove
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                           $ {bag.price}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            ))}
          </div>
        </div>
      </span>
      <span className="bag-component-right">
        <div className="bag-component-right-items">
          <h4>ORDER SUMMARY</h4>
          <p className="bag-component-right-text">SUBTOTAL {}</p>
          <p className="bag-component-right-text shipping">SHIPPING </p>
          <p className="shipping-free">FREE</p>
          <div className="shipping-text">
            <p>STANDARD (3-5 BUS DAYS)</p>
          </div>
          <p className="bag-component-right-text shipping">ESTIMATED TOTAL</p>
          <p className="shipping-free price-total">$ {price}</p>
          <div className="popup-for-afterpay">
            <p className="popup-for-afterpay-text">
              Pay in 4 installments on orders $35 - $1000 by{" "}
            </p>
            <span onClick={handleAfterpay} className="afterpay-info">
              {/* {(img ? img : "i")} */}
            </span>
          </div>
          <p className="popup-click-pay">
            <Link to="/bag/payment" className="brand-link">
              ORDER
            </Link>
          </p>
        </div>
      </span>
    </div>
  );
};

export default Bag;
