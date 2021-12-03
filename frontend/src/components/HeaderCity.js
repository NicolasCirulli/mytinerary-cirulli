
const HeaderCity = ({datos}) => {

    return (
        <>
            <div className="header-city">

                <img src={`/assets/images/C${datos.imagen}.jpg`} alt={datos.ciudad} className="header-city-img"/>
                <h2 className="header-city-titulo">{datos.ciudad}</h2>

            </div>
        </>
    )

}

export default HeaderCity