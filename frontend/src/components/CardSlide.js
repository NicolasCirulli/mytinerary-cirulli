
const CardSlide = ( { ciudad } ) => {
  const {nombre,pais} = ciudad
  const imagen = `./assets/images/C${nombre}.jpg`;
  console.log(imagen)
  return (
    <div  className="tarjeta">
      <div >
        <img src={imagen} alt="city" className="tarjeta_imagen"/>
      <div/>
        <div className="tarjeta_ciudad">{nombre}</div>
        <div className="tarjeta_pais">{pais}</div>
      </div>
    </div>
  );
};

export default CardSlide;
