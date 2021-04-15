import { db } from "./index";

import {
  SET_BRANDS,
  SET_CATEGORY,
  SET_ITEMS,
  SET_NEWS_ITEMS
} from "./reducer/reducer";
export function getBrandsFromDb(dispatch, brandState = []) {
  db.collection("brands")
    .get()
    .then((doc) => {
      doc.forEach((brand) => {
        brandState.push({
          brandId: brand.id,
          ...brand.data()
        });
      });
      dispatch({
        type: SET_BRANDS,
        payload: brandState
      });
    });
}
export function getCategoryFromDb(dispatch, categoryState = []) {
  db.collection("category")
    .get()
    .then((doc) => {
      doc.forEach((category) => {
        categoryState.push({
          categoryId: category.id,
          ...category.data()
        });
      });
      dispatch({
        type: SET_CATEGORY,
        payload: categoryState
      });
    });
}

export function getItemsFromDb(dispatch, itemsState = []) {
  db.collection("items")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((item) => {
        itemsState.push({
          itemId: item.id,
          ...item.data()
        });
      });
      dispatch({
        type: SET_ITEMS,
        payload: itemsState
      });
    });
}

export function getNewItemsFromDb(dispatch, newsState = []) {
  db.collection("items")
    .where("status", "==", "new")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((item) => {
        newsState.push({
          itemId: item.id,
          ...item.data()
        });
      });
      dispatch({
        type: SET_NEWS_ITEMS,
        payload: newsState
      });
    });
}
