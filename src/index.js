import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { Provider } from "react-redux";
import store from "./reducer/indexStore";
const firebaseConfig = {
  apiKey: "AIzaSyBdJeXtbTxrpJH1fialzApIUVN84V7Ioyg",
  authDomain: "cosmetics-91882.firebaseapp.com",
  projectId: "cosmetics-91882",
  storageBucket: "cosmetics-91882.appspot.com",
  messagingSenderId: "134093997606",
  appId: "1:134093997606:web:ab96e1e384a17969aec8e7"
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth()
export const storage = firebase.storage();
const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 3000,
  offset: '30px',
  transition: transitions.FADE,
  color:'white',
  background:'white'
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <Provider store={store} >
        <App />
      </Provider>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
