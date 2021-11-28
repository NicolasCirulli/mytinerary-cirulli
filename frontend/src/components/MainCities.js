import React, { useState,useEffect,useRef } from 'react'
import CardCities from "./CardCities"


const MainCities = ( { arrayCiudades } )=>{
    
    const [ciudades,setCiudades] = useState(arrayCiudades )
    const [ciudadesFiltradas,setCiudadesFiltradas] = useState( {ciudadesFiltradas:arrayCiudades} )
    const filtro = useRef()

    const filtrando = () => {
        let ciudadesFiltradas = filtrarCiudades(ciudades, filtro.current.value)
        setCiudadesFiltradas({ciudadesFiltradas})
   }
    const filtrarCiudades = (ciudades,value) => {
        let aux = value.trim()
        let arrayFiltrado = ciudades.filter( ciudad => ciudad.ciudad.toLowerCase().startsWith( aux.toLowerCase() ) )
        return arrayFiltrado
    }
    useEffect(() => {
        console.log(ciudadesFiltradas)
    },[ciudadesFiltradas])

    return (
        <>
                <form className="formulario" onChange={filtrando}>
                    <label> 
                        <input type="text" className="input-ciudades" name="ciudades" ref={filtro} placeholder="Filter by city"></input>
                    </label>
                </form>
                {   ciudadesFiltradas.ciudadesFiltradas.map( ciudad => <CardCities key={ciudad.ciudad} datos={ciudad} /> )  }   
        </>
    )
}
export default MainCities