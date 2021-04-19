import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { selectNews } from "../../selectors/fierbase";
import Item from "./Item";

const CarouselPrint = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  const news = useSelector(selectNews);
  let newArrayItems = [...news].slice(0, 9);
  return (
    <div style={{ margin: "3% 10% 3% 10%" }}>
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
        showDots
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        transitionDuration={100}
        customTransition="transform 1000ms ease-in-out"
        focusOnSelect
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {newArrayItems.map((item, i) => {
          return (
            <Item key={item.itemId} ind={i} {...item} showThumbs={false} />
          );
        })}
      </Carousel>
    </div>
  );
};
export default CarouselPrint;
