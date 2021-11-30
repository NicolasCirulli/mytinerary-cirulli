import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderCity from "../components/HeaderCity";
import Itineraries from "../components/Itineraries";
export default class City extends React.Component {
  
  state = { }
  
  componentDidMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    axios
      .get(`http://localhost:4000/api/ciudades/${this.props.params.city}`)
      .then((res) => this.setState({ ciudad: res.data.respuesta }));
  }
  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <>

        {this.state.ciudad && <HeaderCity datos={this.state.ciudad} />}
        <div className="contenedor-city">

        <Itineraries />
        <Itineraries />
        <Link to="/cities">
          <div className="text-center"><button className="btn btn-city"> Back to Cities</button></div>
        </Link>
        </div>
        
      </>
    );
  }
}
