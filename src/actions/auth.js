import { createAction } from "redux-actions";
export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER";

export const setLoggedInUser = createAction(SET_LOGGED_IN_USER);
