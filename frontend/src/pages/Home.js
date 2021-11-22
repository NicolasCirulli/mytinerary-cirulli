import React from "react";
import Hero from "../components/Hero";
import BtnA from "../components/CallToAction";
import CarouselCompo from "../components/Carousel";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="fondo-main">
          <Hero />
          <BtnA />
        </div>
        <div className="fondo-carousel">
          <CarouselCompo />
        </div>
      </>
    );
  }
}
