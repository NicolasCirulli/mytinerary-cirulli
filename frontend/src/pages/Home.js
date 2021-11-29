import React from "react";
import Hero from "../components/Hero";
import CarouselHome from "../components/CarouselHome";

export default class Home extends React.Component {
  render() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    return (
      <>
        <div className="fondo-main">
          <Hero />
         
        </div>
        <div className="fondo-carousel bg-oscuro">
          <CarouselHome />
        </div>
      </>
    );
  }
}
