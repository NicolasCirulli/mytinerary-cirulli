import React from "react";
import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";
import CarouselHome from "../components/CarouselHome";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="fondo-main">
          <Hero />
          <CallToAction />
        </div>
        <div className="fondo-carousel bg-oscuro">
          <CarouselHome />
        </div>
      </>
    );
  }
}
