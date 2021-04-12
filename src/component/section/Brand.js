import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { db, storage } from "../..";
import { SET_ITEMS_BY_BRAND } from '../../reducer/reducer'
import { selectBrands, selectBrand } from "../../selectors/fierbase";
import Item from "./Item";
import SideBar from "./SideBar";
const useStyles = makeStyles({
  root: {
    display: "flex",
    width: 95 + "%",
    margin: "auto",
    justifyContent: "space-between"
  },
  brandItem: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "space-between",
    width: 82 + "%"
  }
});

const Brand = () => {
  const classes = useStyles();
  const { brandUrl } = useParams();
  const selectedBrand = useSelector(selectBrand);
  const [filteredItems, setFilteredItems] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    const ref = db.collection("brands").doc(selectedBrand.brandId);
    db.collection("items").where("brandId", "==", ref).get()
      .then((querySnapshot) => {
        const filteringItems = [];
        querySnapshot.forEach((item) => {
          filteringItems.push(item.data());
        });
        setFilteredItems(filteringItems)
        dispatch({
          type: SET_ITEMS_BY_BRAND,
          payload: filteringItems
        })
      });
  }, [selectedBrand])
  return (
    <div className={classes.root}>
      <SideBar/>
      <div className={classes.brandItem}>
        {filteredItems.map((item, i) =>
          <Item key={i} ind={i} {...item} url ={brandUrl} />
        )}
      </div>
    </div>
  );
};
export default Brand;
