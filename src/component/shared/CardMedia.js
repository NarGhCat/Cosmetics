import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardMedia as MaterialCardMedia,
  CircularProgress
} from "@material-ui/core";
import item from "../../Pics/icons/item.png";
const useStyles = makeStyles({
  media: {
    height: 200
  }
});

const MediaCard = (props) => {
  const {
    classes = {},
    children,
    image = item,
    title = "item",
    className = "",
    ...rest
  } = props;
  const cardMediaClasses = useStyles();
  return (
    <MaterialCardMedia
      className={cardMediaClasses.media}
      image={image}
      title={title}
      {...rest}
    />
  );
};
export default MediaCard;
