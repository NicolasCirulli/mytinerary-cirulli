
const HeaderCity = ({datos}) => {

    const estilos = {
        background: 'url(/assets/images/C'+datos.imagen+'.jpg )', 
    };

    return (
        <>
            <div className="header-city" style={estilos}>
                <h2 className="header-city-titulo">{datos.ciudad}</h2>
            </div>
        </>
    )

}

export default HeaderCity