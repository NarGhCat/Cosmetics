import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";

import { Provider } from "react-redux";
import store from "./reducer/indexStore";

const firebaseConfig = {
  apiKey: "AIzaSyBdJeXtbTxrpJH1fialzApIUVN84V7Ioyg",
  authDomain: "cosmetics-91882.firebaseapp.com",
  projectId: "cosmetics-91882",
  storageBucket: "cosmetics-91882.appspot.com",
  messagingSenderId: "134093997606",
  appId: "1:134093997606:web:ab96e1e384a17969aec8e7"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth()
window.auth = auth

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
