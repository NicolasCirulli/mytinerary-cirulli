import React from "react";
import ContenedorSign from "../components/ContenedorSign";


export default class SignUp extends React.Component {
  render() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    return (
      <>
            <ContenedorSign signup={true}/>
      </>
    );
  }
}
