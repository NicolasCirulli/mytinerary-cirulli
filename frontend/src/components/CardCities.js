import { Link } from "react-router-dom";

const CardCities = ({ datos }) => {
  const { pais, ciudad, imagen, _id,divisa,idioma } = datos;
  const srcImg = `./assets/images/C${imagen}.jpg`;
  return (
    <>
      <Link to={`/cities/${_id}`}  className="card-cities">
          <img className="card-cities-image" src={srcImg} alt="img" />
          <div className="card-cities-texto">
            <p className="texto-negro font-bold">City: {ciudad}</p>
            <p className="texto-negro font-bold">Country: {pais}</p>
            <p className="texto-negro font-bold">Currency: {divisa}</p>
            <p className="texto-negro font-bold">Language: {idioma}</p>
          </div>
      </Link>
        
    </>
  );
};

export default CardCities;
