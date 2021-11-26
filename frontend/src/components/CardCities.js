import { Link } from "react-router-dom"

const CardCities = ({datos})=>{

    const { pais,nombre,descripcion,id } = datos
    const srcImg = `./assets/images/C${id}.jpg`
    return(
        <>
        <div  className="card-cities">
            <img className="card-cities-image" src={srcImg}  alt="img"/>
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
        <Link to={`/cities/${id}`} >Read More</Link>
        </>
    )

}

export default CardCities