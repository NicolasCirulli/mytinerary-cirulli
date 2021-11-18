import React from "react";
import NavbarHome from "../components/Navbar";
import Hero from "../components/Hero";
import BtnA from "../components/CallToAction";
import PlanTrip from "../components/PlanTrip";

export default class Home extends React.Component{
  
  render() {
    return (
      <>
        <div  className="fondo-main">
          <NavbarHome />
          <Hero />
          <BtnA />
        </div>
        <div className="plan-trip">
          <PlanTrip />
          </div>
      </>
    );
  }
}