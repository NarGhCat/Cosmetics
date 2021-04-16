import React, { useState, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core';
import { db, storage } from '../..';
import { SET_ITEMS_BY_CATEGORY } from '../../reducer/reducer'
import { selectBrands, selectItems, selectCategory, selectCategoryById } from '../../selectors/fierbase';
import Item from './Item';
import SideBar from './SideBar';
const useStyles = makeStyles({
  root: {
    display: "flex",
    width: 95 + "%",
    margin: "auto",
    justifyContent: "space-between"
  },
  categoryItem: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "space-between",
    width: 82 + "%"
  },
});

const Category = () => {

  const classes = useStyles()
  const { categoryId } = useParams()
  const selectedCategory = useSelector(selectCategoryById(categoryId))
  const [filteredItems, setFilteredItems] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {

    if (!selectedCategory) return;
    const ref = db.collection("category").doc(selectedCategory.categoryId);
    db.collection("items").where("categoryId", "==", ref).limit(5).get()
      .then((querySnapshot) => {
        const filteringItems = [];
        querySnapshot.forEach((item) => {
          filteringItems.push(item.data());
        });
        setFilteredItems(filteringItems)
        dispatch({
          type: SET_ITEMS_BY_CATEGORY,
          payload: filteringItems
        })
      });
  }, [selectedCategory])

  return (
    <div className={classes.root}>
      <SideBar />
      <div className={classes.categoryItem}>
        {filteredItems.map((item, i) => (
          <Item key={item.itemId} ind={i} {...item} url={categoryId} selectedCategory={selectedCategory} />
        ))}
      </div>
    </div>
  )
}
export default Category
