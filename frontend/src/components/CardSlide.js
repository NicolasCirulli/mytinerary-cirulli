
const CardSlide = ( { ciudad } ) => {
  const {nombre,pais,nombreImagen} = ciudad
  const imagen = `./assets/images/C${nombreImagen}.jpg`;
  console.log(ciudad)
  return (
    <div  className="tarjeta">
      <div >
        <img src={imagen} alt="city" className="tarjeta_imagen"/>
      </div>
        <div className="tarjeta_ciudad montserrat">{nombre} </div>
        <div className="tarjeta_pais montserrat">{pais}</div>  
    </div>
  );
};

export default CardSlide;
