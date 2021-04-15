import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card as MaterialCard } from "@material-ui/core";
const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    height: 400,
    margin: "15px 5px 10px",
    display: "flex",
    flexWrap: "wrap"
  },
  media: {
    height: 200
  },
  typography: {
    color: "#4c003f"
  },
  buttonLabel: {
    color: "#4c003f"
  }
});

const Card = (props) => {
  const {
    width = "150px",
    classes = {},
    children,
    variant = "secondary",
    className = "",
    ...rest
  } = props;
  const cardClasses = useStyles();

  return <MaterialCard className={cardClasses.card}>{children}</MaterialCard>;
};
export default Card;
