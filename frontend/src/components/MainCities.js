import React, { useState,useRef,useEffect } from 'react'
import CardCities from "./CardCities"
import ErrorCities from "./ErrorCities"
import {connect} from "react-redux"
import citiesActions from '../redux/actions/citiesActions'
const MainCities = ( props )=>{

    // estado
    const [valueSelect,setvalueSelect]=useState('City')

    // funciones
    const filtrando = () => props.filtrarCiudades(input.current.value,select.current.value)
    const seleccionado = ()=> setvalueSelect(select.current.value)
    // valores
    const input = useRef()
    const select = useRef()
    
   
    return (
        <>
              <div className="formulario" >
                    <input type="text" className="input-ciudades" name="ciudades" ref={input} placeholder={`Filter by ${valueSelect}`} onChange={filtrando}></input>
                    
                        <div>
                            <select className="select-filtro" required ref={select} onChange={seleccionado}>
                                    <option value="City" className="input-ciudades">City</option>
                                    <option value="Country" className="input-ciudades">Country</option>
                            </select>
                        </div>
                </div>
                {   
                    props.ciudadesFiltradas.length > 0 
                    ? props.ciudadesFiltradas.map( ciudad => <CardCities key={ciudad.ciudad} datos={ciudad} /> )  
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
