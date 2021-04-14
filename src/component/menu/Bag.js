import React, { useEffect, useState } from "react";
import "../../styles/bag.css";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../selectors/fierbase";
import { db } from "../..";
import BagItem from './BagItem'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {useStyles} from './BagStyles'

const Bag = () => {
  const user = useSelector(selectUser);
  const { path, url } = useRouteMatch();
  const classes = useStyles();
  const [bag, setBag] = useState([]);
  console.log(user)
  useEffect(() => {
    if(user.item){
      setBag(user.item.bag);
    }
    console.log('bag.js')
  }, [user]);
  return (
    <div className={classes.bagComponent}>
      <div className={classes.bagHeader}>
        <h1> SHOPPTING BAG { } </h1>
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
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Word of the Day
        </Typography>
            <Typography variant="h5" component="h2">
              be
        </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
        </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
          <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Bag;


