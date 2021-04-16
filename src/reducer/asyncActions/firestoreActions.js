import firestoreSvc from "../../services/firestoreSvc"
import { SET_CATEGORY } from "../reducer";

export const getCategoriesAction = () => async dispatch => {
    const categoryState = [];
    const doc = await firestoreSvc.getCategories();
    doc.forEach((category) => {
        categoryState.push({
            categoryId: category.id,
            ...category.data(),
        });
        console.log("category");
    });

    dispatch({
        type: SET_CATEGORY,
        payload: categoryState,
    })
}