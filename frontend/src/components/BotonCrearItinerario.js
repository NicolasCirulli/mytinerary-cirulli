import React,{useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import useDisplay from "../hooks/useDisplay";
import {Link} from 'react-router-dom'
const BotonCrearItinerario = ({ ciudad }) => {

  

  // hooks
  const viewMore = useDisplay()
  


  // Token 
  const token = localStorage.getItem("token");

  // Redux
  const dispatch = useDispatch();
  const usuario = useSelector((store) => store.usuariosReducer.usuario);



  // Funciones
  const crearItinerario = () =>{
    viewMore.HandleDisplay()
    dispatch(
      itinerariesActions.crearItinerario(
        token,
        "titulo",
        3,
        5,
        0,
        ["#asdasd", "#asdasd2", "#asdasd3"],
        ['Hola soy el primer comentario','segundo'],
        ciudad._id
      )
    )};

  return (
    <>
    <div className="btn-crear-itinerario">
      <Link to='/CreateItinerary'><button>Create an Itinerary</button></Link>
    </div>
    </>
  );
};

export default BotonCrearItinerario;
