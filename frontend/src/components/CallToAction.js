import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
import {IoIosAirplane} from 'react-icons/io'
const CallToAction = () => {
  return (
      <>
    <div className="text-center call_a">
      <Button size="lg" as={Link} to="/cities" className="btn_call_a bg-naranja texto-oscuro animate__animated animate__fadeInUp">
            Choose destination now! <IoIosAirplane className="animate__animated animate__bounceInLeft" />
      </Button>{" "}
    </div>
    </>
  );
};

export default CallToAction
