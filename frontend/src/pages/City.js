import React from "react";
import { Link } from "react-router-dom";
import HeaderCity from "../components/HeaderCity";
import Itineraries from "../components/Itineraries";
import {connect} from "react-redux"
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from "../redux/actions/itinerariesActions"



class City extends React.Component {
  
  state = {
    ciudades : [],
    itinerarios:[]
  }
  
  componentDidMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    this.props.fetchearItinerarios( this.props.params.city )
    this.props.ciudades.length > 0 
    ?  this.props.obtenerUnaCiudad( this.props.params.city ) 
    :  this.props.obtenerTodas() 
  }
  
  componentDidUpdate(prevProps,prevState) {
    if(prevProps.ciudades !== this.props.ciudades){
         this.props.obtenerUnaCiudad( this.props.params.city ) 
    }
    if(prevState.ciudad !== this.props.ciudad){
      this.setState( {ciudad : this.props.ciudad } )
    }
    if(prevProps.itinerarios !== this.props.itinerarios){
      this.setState({itinerarios:this.props.itinerarios})
    }
  }

  render() {
    return (
      <>
        {this.state.ciudad && <HeaderCity datos={this.state.ciudad} />}
        <div className="contenedor-city">
         { 
         this.state.itinerarios.length > 0 && 
         this.state.itinerarios.map( itinerario => {
          return <Itineraries key={itinerario.titulo} datos={itinerario}/>
         })
         }
        <Link to="/cities">
          <div className="text-center"><button className="btn btn-city"> Back to Cities</button></div>
        </Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ciudad : state.citiesReducer.ciudad,
    ciudades : state.citiesReducer.ciudades,
    itinerarios : state.itinerariesReducer.itinerariosCiudad
  };
};

const mapDispatchToProps = {
 obtenerUnaCiudad: citiesActions.obtenerUnaCiudad,
 obtenerTodas: citiesActions.obtenerTodas,
 fetchearItinerarios : itinerariesActions.obtenerItinerariosPorCiudad
};
export default connect(mapStateToProps, mapDispatchToProps)(City);
