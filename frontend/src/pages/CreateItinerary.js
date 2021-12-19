import e from 'cors';
import React,{useRef,useState} from 'react';

import {useSelector, useDispatch} from 'react-redux'
import itinerariesActions from "../redux/actions/itinerariesActions";

const CreateItinerary = () =>{

    // Redux
  const dispatch = useDispatch();
  const usuario = useSelector((store) => store.usuariosReducer.usuario);
  const cities = useSelector((store) => store.citiesReducer.ciudades);

    const [ciudades,useCiudades] = useState(cities)
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState(null)
    // Token 
    const token = localStorage.getItem("token");


  //ref
  const ciudad = useRef()
  const titulo = useRef()
  const Price = useRef()
  const Duration = useRef()
  const hashtagUno = useRef()
  const hashtagDos = useRef()
  const hashtagTres = useRef()

  // funciones 
  const CrearItinerario = e =>{
    e.preventDefault();
    if(ciudadSeleccionada && ciudadSeleccionada !== 'null'){
        dispatch(itinerariesActions.crearItinerario(
          token,
          titulo.current.value,
          Price.current.value,
          Duration.current.value,
          [hashtagUno.current.value,hashtagDos.current.value, hashtagTres.current.value],
          ciudadSeleccionada
        ))
    }else{
        alert('Seleccione una ciudad')
    }
    };

    const HandleSelect = (e) =>
    e.target.value !== "null"
      ? setCiudadSeleccionada(e.target.value)
      : setCiudadSeleccionada("null");
  
    return (
        <>
        <div className="form-crearItinerario">
           <form onSubmit={CrearItinerario}>

            <input type="text" placeholder="Title" ref={titulo} required />
            <input type="number"placeholder="Price (min 1 - max 5)" min='1' max='5' ref={Price} required />
            <input type="text" placeholder="Duration" ref={Duration} required />
            <input type="text" placeholder="hashtag 1" ref={hashtagUno} required />
            <input type="text" placeholder="hashtag 2" ref={hashtagDos} required />
            <input type="text" placeholder="hashtag 3" ref={hashtagTres} required />
            
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


            <input type='submit' value='Create' className="font-bold" />
           </form>
        </div>
        </>
    )


}

export default CreateItinerary