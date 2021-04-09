import React, { useEffect, useState } from "react";
import "../../styles/bag.css";

const Bag = () => {
  const [displayNone, setDisplay] = useState(false);

  const handleAfterpay = (e) => {
    setDisplay(displayNone ? false : true);
  };

  return (
    <div className="bag-component">
      <div className="bag-component-heading">
        <h1> SHOPPTING BAG {} </h1>
      </div>
      <span className="bag-component-left">
        <div className="bag-component-left-items"></div>
      </span>
      <span className="bag-component-right">
        <div className="bag-component-right-items">
          <h4>ORDER SUMMARY</h4>
          <p className="bag-component-right-text">SUBTOTAL {}</p>
          <p className="bag-component-right-text shipping">SHIPPING </p>
          <p className="shipping-free">FREE</p>
          <div className="shipping-text">
            <p>STANDARD (3-5 BUS DAYS)</p>
          </div>
          <p className="bag-component-right-text shipping">ESTIMATED TOTAL</p>
          <p className="shipping-free price-total">$ 0</p>
          <div className="popup-for-afterpay">
            <p className="popup-for-afterpay-text">
              Pay in 4 installments on orders $35 - $1000 by{" "}
            </p>
            <span onClick={handleAfterpay} className="afterpay-info">
               {/* {(img ? img : "i")} */}
            </span>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Bag;
