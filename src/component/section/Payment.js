import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/payment.css";
import Button from '../shared/Button'
import { selectUser } from "../../selectors/firebase";
import produce from "immer";

import { useAlert } from "react-alert";
import { db } from "../..";
import { SET_USER } from "../../reducer/reducer";
import { useHistory } from "react-router";
const Payment = () => {
  const user = useSelector(selectUser);
  const alert = useAlert();
  const history = useHistory()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

// const alert = (

// )
const handleBuy = ( user)=>{
    db.collection("users")
      .doc(user.uid)
      .update({
        bag: [],
      })
      .then(() => {
        let payload = produce(user, (draftUser) => {
           draftUser.data.bag =[];
        });
        dispatch({
          type: SET_USER,
          payload
        });
        alert.show(<div style={{ color: "white", fontSize: "12px" }}>'Successfully completed !'</div>)
        history.push('/')
      });
}
  return (
    <div className="payment-form">
      <div className="payment-form-input">
        <Cards
          cvc={data.cvc}
          expiry={data.expiry}
          focus={data.focus}
          name={data.name}
          number={data.number}
        />
        <div className = "card-form">
          <div className = "card-form-inner">
            <form action="" className="form">
              <input
                type="number"
                name="cvc"
                placeholder="CVC"
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="expiry"
                placeholder="Expire Date"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="number"
                placeholder="Card Number"
                onChange={handleInputChange}
              />
            </form>
          </div>
        </div>
        <div className='payment-button'>
          <Button onClick={()=>{handleBuy(user)}}>BUY</Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
