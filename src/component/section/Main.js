import Header from "./Header";
import CarouselPrint from "./CarouselPrint";
import DiscoverEvenMore from "./DiscoverEvenMore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function Main() {
  return (
    <>
      <Header />
      <CarouselPrint />
      <DiscoverEvenMore />
    </>
  );
}

export default Main;
