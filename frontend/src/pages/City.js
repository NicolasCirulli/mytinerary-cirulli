import React from "react";
import { Link } from "react-router-dom";
import HeaderCity from "../components/HeaderCity";
import Itineraries from "../components/Itineraries";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Loader from "../components/Loader";
class City extends React.Component {
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
    if (prevProps.ciudades !== this.props.ciudades) {
      this.props.obtenerUnaCiudad(this.props.params.city);
    }
  }

  render() {
    return (
      <>
        {this.props.ciudad && this.props.itinerarios.length > 0 ? (
          <div>
            <HeaderCity datos={this.props.ciudad} />
            <div className="contenedor-city">
              {this.props.itinerarios.map((itinerario) => (
                <Itineraries key={itinerario.titulo} datos={itinerario} />
              ))}
              <Link to="/cities">
                <div className="text-center">
                  <button className="btn btn-city"> Back to Cities</button>
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
  };
};

const mapDispatchToProps = {
  obtenerUnaCiudad: citiesActions.obtenerUnaCiudad,
  obtenerTodas: citiesActions.obtenerTodas,
  fetchearItinerarios: itinerariesActions.obtenerItinerariosPorCiudad,
};
export default connect(mapStateToProps, mapDispatchToProps)(City);
