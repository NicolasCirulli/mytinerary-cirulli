import { Link } from "react-router-dom";

const CardCities = ({ datos }) => {
  const { pais, ciudad, imagen, _id } = datos;
  const srcImg = `./assets/images/C${imagen}.jpg`;
  return (
    <>
      <Link to={`/cities/${_id}`}>
        <div className="card-cities">
          <img className="card-cities-image" src={srcImg} alt="img" />
          <div className="card-cities-texto">
            <p className="texto-negro font-bold">City: {ciudad}</p>
            <p className="texto-negro font-bold">Country: {pais}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardCities;
