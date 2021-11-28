import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderCity from "../components/HeaderCity";

export default class City extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {};
  }
  componentDidMount() {
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

        <h2 className=" text-center">under construction</h2>
        <Link to="/cities">
          <div className="text-center"><button className="btn btn-city"> Back to cities</button></div>
        </Link>
        </div>
        
      </>
    );
  }
}
