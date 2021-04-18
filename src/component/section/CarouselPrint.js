import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { selectNews } from "../../selectors/fierbase";
import { useSelector } from "react-redux";
import Item from "./Item";
import { useParams } from "react-router-dom";

const CarouselPrint = () => {
  const news = useSelector(selectNews);
  const { brandId } = useParams();
  let newArrayItems = [...news].slice(0, 9);
  return (
    <div style={{ margin: "auto" }}>
      <h1
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          marginTop: "30px",
          fontSize: "40px",
          color: "white"
        }}
      >
        BENEFIT MUST-HAVES
      </h1>
      <h3
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          color: "white"
        }}
      >
        Meet the products you‘ve made best-sellers.
      </h3>
      <Carousel
        autoPlay
        stopOnHover
        autoFocus
        infiniteLoop
        centerMode
        centerSlidePercentage={27}
        width="90%"
        style={{ margin: "auto" }}
      >
        {newArrayItems.map((item, i) => {
          return <Item key={item.itemId} ind={i} {...item} />;
        })}
      </Carousel>
    </div>
  );
};

export default CarouselPrint;
