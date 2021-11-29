import React from "react";
import HeaderCities from "../components/HeaderCities";
import MainCities from "../components/MainCities";
import axios from "axios";
export default class Cities extends React.Component {

  constructor(){
    super()
    this.state = {
      
    }
  }
  componentDidMount(){
    axios.get('http://localhost:4000/api/ciudades')
    .then( res => this.setState({ciudades : res.data.respuesta}))
  }

  render() {
    return (
      <>
            <div className="bg-oscuro ">
                <HeaderCities/>
                <div className="container-cities">         
                { this.state.ciudades && <MainCities arrayCiudades={this.state.ciudades}/>}
                </div>
            </div>
      </>
    );
  }
}
