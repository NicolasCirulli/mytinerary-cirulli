import React from "react";
import { useSelector, useDispatch } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";

const BotonCrearItinerario = ({ ciudad }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const usuario = useSelector((store) => store.usuariosReducer.usuario);

  const crearItinerario = () =>
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
    );

  return (
    <>
      <button onClick={crearItinerario}>Crear un itinerario</button>
    </>
  );
};

export default BotonCrearItinerario;
