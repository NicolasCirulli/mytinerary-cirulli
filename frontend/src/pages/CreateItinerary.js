import e from "cors";
import React, { useRef, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";

const CreateItinerary = () => {
  // Redux
  const dispatch = useDispatch();
  const usuario = useSelector((store) => store.usuariosReducer.usuario);
  const cities = useSelector((store) => store.citiesReducer.ciudades);

  const [ciudades, useCiudades] = useState(cities);
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(null);
  // Token
  const token = localStorage.getItem("token");

  //ref
  const ciudad = useRef();
  const titulo = useRef();
  const Price = useRef();
  const Duration = useRef();
  const hashtagUno = useRef();
  const hashtagDos = useRef();
  const hashtagTres = useRef();
  const imagen = useRef();

  const actividad = useRef();
  const imagenA = useRef();

  const actividadDos = useRef();
  const imagenADos = useRef();

  const actividadTres = useRef();
  const imagenATres = useRef();

  // funciones
  const CrearItinerario = async(e) => {
    e.preventDefault();
    try{

      if (ciudadSeleccionada && ciudadSeleccionada !== "null") {
        const itinerario = await dispatch(
          itinerariesActions.crearItinerario(
            token,
            titulo.current.value,
            Price.current.value,
            Duration.current.value,
            [
              hashtagUno.current.value,
              hashtagDos.current.value,
              hashtagTres.current.value,
            ],
            ciudadSeleccionada,
            imagen.current.value
            )
            );
            console.log(itinerario);
        if(itinerario.data.respuesta) {
          dispatch(itinerariesActions.crearActividades({titulo:actividad.current.value,imagen:imagenA.current.value,itinerarioRelacionado: itinerario.data.respuesta._id}))

          dispatch(itinerariesActions.crearActividades({titulo:actividadDos.current.value,imagen:imagenADos.current.value,itinerarioRelacionado: itinerario.data.respuesta._id}))

          dispatch(itinerariesActions.crearActividades({titulo:actividadTres.current.value,imagen:imagenATres.current.value,itinerarioRelacionado: itinerario.data.respuesta._id})) 
        }
          } else {
            alert("Choose a city");
          }
        }catch (e) {
          console.log(e);
        }
  };

  const HandleSelect = (e) =>
    e.target.value !== "null"
      ? setCiudadSeleccionada(e.target.value)
      : setCiudadSeleccionada("null");

  return (
    <>
      <h2 className="text-center pt-5 texto-naranja">
        Complete all fields and create
      </h2>
      <div className="form-crearItinerario">
        <form onSubmit={CrearItinerario}>
          <h2>Itinerary</h2>
          <input type="text" placeholder="Title" ref={titulo} required />
          <input
            type="number"
            placeholder="Price (min 1 - max 5)"
            min="1"
            max="5"
            ref={Price}
            required
          />
          <input type="text" placeholder="Duration" ref={Duration} required />
          <input
            type="text"
            placeholder="hashtag 1"
            ref={hashtagUno}
            required
          />
          <input
            type="text"
            placeholder="hashtag 2"
            ref={hashtagDos}
            required
          />
          <input
            type="text"
            placeholder="hashtag 3"
            ref={hashtagTres}
            required
          />
          <input type="text" placeholder="Image" ref={imagen} required />

          {ciudades.length > 0 ? (
            <div className="input_form">
              <select
                placeholder="Choose your country"
                onChange={HandleSelect}
                ref={ciudad}
                defaultValue="-"
                required
              >
                <option value="null">Choose City</option>
                {ciudades.map((ciudad) => (
                  <option key={ciudad.ciudad} value={ciudad._id}>
                    {ciudad.ciudad}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <select>
              <option value="null">Loading...</option>
            </select>
          )}
          <h2>Activities of itinerary</h2>

          <input
            type="text"
            placeholder="Activity 1"
            ref={actividad}
            required
          />
          <input
            type="text"
            placeholder="Image activity 1"
            ref={imagenA}
            required
          />

          <input
            type="text"
            placeholder="Activity 2"
            ref={actividadDos}
            required
          />
          <input
            type="text"
            placeholder="Image activity 2"
            ref={imagenADos}
            required
          />

          <input
            type="text"
            placeholder="Activity 3"
            ref={actividadTres}
            required
          />
          <input
            type="text"
            placeholder="Image activity 3"
            ref={imagenATres}
            required
          />

          <input type="submit" value="Create" className="font-bold" />
        </form>
      </div>
    </>
  );
};

export default CreateItinerary;
