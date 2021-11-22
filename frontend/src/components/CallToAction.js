import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
const BtnA = () => {
  return (
      <>
    <div className="text-center call_a">
      <Button size="lg" as={Link} to="/cities" className="btn_call_a animate__animated animate__fadeInUp">
            Choose destination now!
      </Button>{" "}
    </div>
    </>
  );
};

export default BtnA
