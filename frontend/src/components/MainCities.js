import React, { useState,useRef } from 'react'
import CardCities from "./CardCities"
import ErrorCities from "./ErrorCities"

const MainCities = ( { arrayCiudades } )=>{
    

    const [ciudadesFiltradas,setCiudadesFiltradas] = useState( arrayCiudades )
    const filtro = useRef()

    const filtrando = () => setCiudadesFiltradas( filtrarCiudades(arrayCiudades, filtro.current.value)  )
    const filtrarCiudades = (ciudades , value)=> ciudades.filter( ciudad => ciudad.ciudad.toLowerCase().startsWith( value.toLowerCase().trim() ) ) 

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
export default MainCities