import React,{ useState } from "react";

const HeaderCity = ({datos}) => {

    const [ciudad,setCiudad] = useState(datos)

    return (
        <>
            <div className="header-city">

                <img src={`/assets/images/C${ciudad.imagen}.jpg`} alt={ciudad.ciudad} className="header-city-img"/>
                <h2 className="header-city-titulo">{ciudad.ciudad}</h2>

            </div>
        </>
    )

}

export default HeaderCity