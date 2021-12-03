import React from "react";
import HeaderCities from "../components/HeaderCities";
import MainCities from "../components/MainCities";
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

class Cities extends React.Component {

  
  state = {}
  
  componentDidMount(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    this.props.obtenerTodas()
  }

  render() {
    return (
      <>
            <div className="bg-oscuro ">
                <HeaderCities/>
                <div className="container-cities">         
                { this.props.ciudades.length > 0 && <MainCities arrayCiudades={this.props.ciudades}/>}
                </div>
            </div>
      </>
    );
  }
}


const mapStateToProps = (state) => {
   return {
     ciudades : state.citiesReducer.ciudades
   };
};

const mapDispatchToProps = {
  obtenerTodas: citiesActions.obtenerTodas
};
export default connect(mapStateToProps, mapDispatchToProps)(Cities);
