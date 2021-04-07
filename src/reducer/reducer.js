import { SET_LOGGED_IN_USER } from "../actions/auth";
import initialState from "./initialState";
export const SET_BRANDS ='SET_BRANDS'
export const SELECTED_BRAND = 'SELECTED_BRAND'
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_ITEMS ='SET_ITEMS'
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER : {
      return {
        ...state,
        loggedInUser: action.payload
      }
    }case SET_BRANDS : {
      return {
        ...state,
        brands: action.payload
      }
    }case SELECTED_BRAND : {
      return {
        ...state,
        selectedBrand: action.payload
      }
    }case SET_CATEGORY : {
      return {
        ...state,
        categories: action.payload
      }
    }case SET_ITEMS : {
      return {
        ...state,
        items: action.payload
      }
    }

    default:
      return state;
  }
};

export default reducer;
