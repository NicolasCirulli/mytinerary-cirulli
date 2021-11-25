

const CardCities = ({datos})=>{

    const { pais,nombre,descripcion,id } = datos
    const srcImg = `./assets/images/C${id}.jpg`
    return(
        <div  className="card-cities">
            <img className="card-cities-image" src={srcImg}  alt=""/>
            <div className="card-cities-description">
                <p className="card-cities-p">{descripcion}</p>
            </div>
            <div className="card-cities-items">
                <p className="texto-negro">Pais: {pais}</p>
                <p className="texto-negro">Ciudad: {nombre}</p>
                <p className="texto-negro">Moneda: </p>
                <p className="texto-negro">Idioma: </p>
            </div>
        </div>
    )

}

export default CardCities