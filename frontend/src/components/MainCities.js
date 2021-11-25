import React, { useState } from 'react'
import CardCities from "./CardCities"


const MainCities = ( { arrayCiudades } )=>{
    
   const [ciudades,useCiudades] = useState(arrayCiudades )

    return (
        <>
                {ciudades &&  ciudades.map( ciudad => <CardCities key={ciudad.nombre} datos={ciudad} /> )}   
        </>
    )
}
export default MainCities