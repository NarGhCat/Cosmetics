import React, { useEffect, useState } from "react";
import "../../styles/bag.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../selectors/firebase";
import FavItem from "./FavItem";

import { useStylesForBag } from "./BagStyles";
import produce from "immer";

const Favorites = () => {
  const user = useSelector(selectUser);
  const classes = useStylesForBag();
  const history = useHistory();
  const [favorites, setfavorites] = useState([]);

  const emptyBag = (
    <div className={classes.emptyBag}>
      <h1 className={classes.emptyBagTitle}>Your wish list is Empty</h1>
    </div>
  );

  useEffect(() => {
    if (user.data) {
      let clonedUserBag = produce(user, (draftUser) => {
        return draftUser.data.favorites;
      });
      setfavorites(clonedUserBag);
    }
  }, [user, history]);
  return (
    <div className={classes.bagComponent}>
      <div className={classes.bagHeader}>
        <h1> My wish list </h1>
      </div>
      <div className={classes.paper}>
        <div className={classes.bagItems}>
          {favorites.length
            ? favorites.map((item, i) => (
                <FavItem key={item.itemId} ind={i} {...item} />
              ))
            : emptyBag}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
