import React from "react";
import ContenedorSign from "../components/ContenedorSign";
export default class SignIn extends React.Component {
  render() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    return (
      <>
            <ContenedorSign singup={false}/>
      </>
    );
  }
}