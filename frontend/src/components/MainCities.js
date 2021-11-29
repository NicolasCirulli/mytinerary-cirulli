import React, { useState,useRef } from 'react'
import CardCities from "./CardCities"
import ErrorCities from "./ErrorCities"

const MainCities = ( { arrayCiudades } )=>{
    
    const [ciudades,setCiudades] = useState(arrayCiudades )
    const [ciudadesFiltradas,setCiudadesFiltradas] = useState( {ciudadesFiltradas:arrayCiudades} )
    const filtro = useRef()

    const filtrando = () => {
        let ciudadesFiltradas = filtrarCiudades(ciudades, filtro.current.value)
        setCiudadesFiltradas({ciudadesFiltradas})
   }
    const filtrarCiudades = (ciudades , value) => {
        let aux = value.trim()
        let arrayFiltrado = ciudades.filter( ciudad => ciudad.ciudad.toLowerCase().startsWith( aux.toLowerCase() ) )
        return arrayFiltrado 
    }
    return (
        <>
                <form className="formulario" onChange={filtrando}>
                    <label>
                        <input type="text" className="input-ciudades" name="ciudades" ref={filtro} placeholder="Filter by city"></input>
                    </label>
                </form>
                {   
                ciudadesFiltradas.ciudadesFiltradas.length > 0 
                ? ciudadesFiltradas.ciudadesFiltradas.map( ciudad => <CardCities key={ciudad.ciudad} datos={ciudad} /> )  
                : <ErrorCities/>
            }   
        </>
    )
}
export default MainCities