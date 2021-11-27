import React, { useState,useEffect,useRef } from 'react'
import CardCities from "./CardCities"


const MainCities = ( { arrayCiudades } )=>{
    
    const re = /\S+\s?\w+/gim;


    const [ciudades,setCiudades] = useState(arrayCiudades )
    const [ciudadesFiltradas,setCiudadesFiltradas] = useState( {ciudadesFiltradas:arrayCiudades} )
    const [value, setValue] = useState(null)
    const filtro = useRef()

    const filtrando = () => {
        let ciudadesFiltradas = filtrarCiudades(ciudades, filtro.current.value)
        setCiudadesFiltradas({ciudadesFiltradas})
        setValue({ value : filtro.current.value})
    }

   

    const filtrarCiudades = (ciudades,value) => {
        console.log(value);
        let aux = value.match(re)
         console.log(aux);
         aux ? aux = aux[0] : aux = ""
         console.log(aux);
        let arrayFiltrado = ciudades.filter( ciudad => ciudad.ciudad.toLowerCase().startsWith( aux.toLowerCase()) )
        console.log(arrayFiltrado);
        
        return arrayFiltrado
    }

    useEffect(() => {
        console.log(ciudadesFiltradas)
    },[ciudadesFiltradas])

    return (
        <>
                <form className="formulario" onChange={filtrando}>
                    <label> Filtrar por ciudades
                        <input type="text" className="mx-3" name="ciudades" ref={filtro} placeholder="Filtrar por ciudades"></input>
                    </label>
                </form>

                {
                     ciudadesFiltradas.ciudadesFiltradas.map( ciudad => <CardCities key={ciudad.ciudad} datos={ciudad} /> ) 
                }   
        </>
    )
}
export default MainCities