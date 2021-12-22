import React from "react";
import { Link } from "react-router-dom";
import HeaderCity from "../components/HeaderCity";
import CardItineraries from "../components/CardItineraries";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Loader from "../components/Loader";
import BotonCrearItinerario from '../components/BotonCrearItinerario'
class City extends React.Component {
  constructor(props) {
    super(props);
    this.resetear = this.props.borrarItinerarios();
  }
  componentDidMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    this.props.fetchearItinerarios(this.props.params.city);

    this.props.ciudades.length > 0
      ? this.props.obtenerUnaCiudad(this.props.params.city)
      : this.props.obtenerTodas();
  }
  componentDidUpdate(prevProps) {
    prevProps.ciudades !== this.props.ciudades &&
      this.props.obtenerUnaCiudad(this.props.params.city);
  }

  render() {
    return (
      <>
        {this.props.ciudad ? (
          <div>
            <HeaderCity datos={this.props.ciudad} />
            { this.props.user === 'guia' && <BotonCrearItinerario ciudad={this.props.ciudad}/>}
            <div className="contenedor-city">
              {this.props.itinerarios ? (
                this.props.itinerarios.length > 0 ? (
                  this.props.itinerarios.map((itinerario) => (
                    <CardItineraries key={itinerario.titulo} datos={itinerario} />
                  ))
                ) : (
                  <h2 className="text-center font-bold texto-naranja my-5 mx-auto">
                    We don't have any itineraries yet for this city
                  </h2>
                )
              ) : (
                <Loader />
              )}
              <Link to="/cities">
                <div className="text-center">
                  <button className="btn btn-city" onClick={this.resetear}>
                    Back to Cities
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ciudad: state.citiesReducer.ciudad,
    ciudades: state.citiesReducer.ciudades,
    itinerarios: state.itinerariesReducer.itinerariosCiudad,
    user: state.usuariosReducer.rol
  };
};

const mapDispatchToProps = {
  obtenerUnaCiudad: citiesActions.obtenerUnaCiudad,
  obtenerTodas: citiesActions.obtenerTodas,
  fetchearItinerarios: itinerariesActions.obtenerItinerariosPorCiudad,
  borrarItinerarios: itinerariesActions.resetear,
};
export default connect(mapStateToProps, mapDispatchToProps)(City);
