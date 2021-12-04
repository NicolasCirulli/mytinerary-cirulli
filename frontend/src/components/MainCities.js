import React, { useState,useRef,useEffect } from 'react'
import CardCities from "./CardCities"
import ErrorCities from "./ErrorCities"
import {connect} from "react-redux"
import citiesActions from '../redux/actions/citiesActions'
const MainCities = ( props )=>{
    
    const [ciudadesFiltradas,setCiudadesFiltradas] = useState( props.arrayCiudades )
    const filtro = useRef()

    useEffect(()=>{
        if(ciudadesFiltradas !== props.ciudadesFiltradas ){
            setCiudadesFiltradas(props.ciudadesFiltradas)
        }
    },[props.ciudadesFiltradas])
   
    useEffect(()=>{
        props.filtrarCiudades(  filtro.current.value  )
    },[])
   

    const filtrando = () => props.filtrarCiudades(filtro.current.value)
   
    return (
        <>
              <div className="formulario" >
                        <input type="text" className="input-ciudades" name="ciudades" ref={filtro} placeholder="Filter by city" onChange={filtrando}></input>
                </div>
                {   
                    ciudadesFiltradas.length > 0 
                    ? ciudadesFiltradas.map( ciudad => <CardCities key={ciudad.ciudad} datos={ciudad} /> )  
                    : <ErrorCities/>
                }   
        </>
    )
}
const mapStateToProps = (state) => {
    return {
      ciudadesFiltradas: state.citiesReducer.ciudadesFiltradas,
    };
  };
  
  const mapDispatchToProps = {
   filtrarCiudades: citiesActions.filtrarCiudades
  };
export default connect(mapStateToProps, mapDispatchToProps)(MainCities)
