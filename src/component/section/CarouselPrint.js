import React from "react";
import { selectNews } from "../../selectors/fierbase";
import { useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
import ItemC from "./CaruselItem";
import Item from "./Item";

import "../../styles/styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const CarouselPrint = () => {
  const news = useSelector(selectNews);
  let newArrayItems = [...news].slice(0, 10);

  return (
    <>
      <h1
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          marginTop: "30px",
          fontSize: "40px",
          color: "white",
        }}
      >
        BENEFIT MUST-HAVES
      </h1>
      <h3
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          color: "white",
        }}
      >
        Meet the products you‘ve made best-sellers.
      </h3>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          {newArrayItems.map((item, index) => {
            <ItemC>
              <Item key={index} {...item} itemId={item.id} />
            </ItemC>;
          })}
          {/* <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
          <Item>Nine</Item> */}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselPrint;
