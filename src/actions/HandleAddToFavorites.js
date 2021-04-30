import produce from "immer";
import { db } from "..";
import { SET_USER } from "../reducer/reducer";
import firebase from "firebase/app";
import "firebase/firestore";

export function handleAddToFavorites(
  item,
  user,
  alertDraft,
  dispatch,
  history
) {
  const favItem = {
    itemId: item.itemId,
    name: item.name,
    photo: item.photo,
    price: item.price,
    status: item.status ? item.status : ""
  };
  if (user.data) {
    db.collection("users")
      .doc(user.uid)
      .update({
        favorites: firebase.firestore.FieldValue.arrayUnion(favItem)
      })
      .then(() => {
        const hasItem = user.data.favorites.find(
          (item) => item.itemId === favItem.itemId
        );
        if (hasItem === undefined) {
          let payload = produce(user, (draftUser) => {
            draftUser.data.favorites.push(favItem);
          });
          dispatch({
            type: SET_USER,
            payload
          });
          alertDraft.show(
            <div style={{ color: "white", fontSize: "12px" }}>
              Successfully added to favorites
            </div>
          );
        } else {
          alertDraft.show(
            <div style={{ color: "white", fontSize: "12px" }}>
              You have already had this product in your favorites
            </div>
          );
        }
      });
  } else {
    history.push("/login");
  }
}
