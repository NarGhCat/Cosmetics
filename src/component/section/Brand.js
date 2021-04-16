import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
<<<<<<< HEAD
import { db, storage } from "../..";
import { SET_ITEMS_BY_BRAND } from '../../reducer/reducer'
import { selectBrands, selectBrand, selectBrandById } from "../../selectors/fierbase";
=======
import { db } from "../..";
import { SET_ITEMS_BY_BRAND } from "../../reducer/reducer";
import { selectBrand } from "../../selectors/fierbase";
>>>>>>> 17e93eb137464af45d9964468ca50b541cc7538d
import Item from "./Item";
import SideBar from "./SideBar";
const useStyles = makeStyles({
  root: {
    display: "flex",
    width: 95 + "%",
    margin: "auto",
    justifyContent: "space-between",
  },
  brandItem: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "space-between",
    width: 82 + "%",
  },
});

const Brand = () => {
  const classes = useStyles();
<<<<<<< HEAD
  const { brandId } = useParams();
  const selectedBrand = useSelector(selectBrandById(brandId));
  const [filteredItems, setFilteredItems] = useState([])
  const dispatch = useDispatch()
=======
  const selectedBrand = useSelector(selectBrand);
  const [filteredItems, setFilteredItems] = useState([]);
  const dispatch = useDispatch();
>>>>>>> 17e93eb137464af45d9964468ca50b541cc7538d
  useEffect(() => {
    if (!selectedBrand) return;
    const ref = db.collection("brands").doc(selectedBrand.brandId);
    db.collection("items")
      .where("brandId", "==", ref)
      .get()
      .then((querySnapshot) => {
        let filteringItems = [];
        querySnapshot.forEach((item) => {
          filteringItems.push({ id: item.id, data: item.data() });
        });
<<<<<<< HEAD
        setFilteredItems(filteringItems)
=======
        setFilteredItems(filteringItems);
>>>>>>> 17e93eb137464af45d9964468ca50b541cc7538d
        dispatch({
          type: SET_ITEMS_BY_BRAND,
          payload: filteringItems,
        });
      });
  }, [selectedBrand, dispatch]);
  return (
    <div className={classes.root}>
      <SideBar />
      <div className={classes.brandItem}>
<<<<<<< HEAD
        {filteredItems.map((item, i) =>
          <Item key={i}{...item.data} itemId={item.id}/>
        )}
=======
        {filteredItems.map((item, i) => (
          <Item key={i} {...item.data} itemId={item.id} />
        ))}
>>>>>>> 17e93eb137464af45d9964468ca50b541cc7538d
      </div>
    </div>
  );
};
export default Brand;
