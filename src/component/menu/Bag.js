import React, { useEffect, useState } from "react";
import "../../styles/bag.css";

const Bag = () => {
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
            <p className="bag-component-right-text">SUBTOTAL</p>
            <p className="bag-component-right-text">SHIPPING FREE</p>
        </div>
      </span>
    </div>
  );
};

export default Bag;
