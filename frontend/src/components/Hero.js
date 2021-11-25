import React from "react";
import CallToAction from "../components/CallToAction";


const Hero = () => {
  return (
    <div className="container text-center margen-top hero">
      <h1 className=" titulo animate__animated animate__backInDown">MyTinerary
      </h1>
      <p className=" parrafo animate__animated animate__fadeInRight">
        Find your perfect trip, designed by insiders who know and love their
        cities!
      </p>
      <CallToAction  className="btnC" />
    </div>
  );
};

export default Hero;
