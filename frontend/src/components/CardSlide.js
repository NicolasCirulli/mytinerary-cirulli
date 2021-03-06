
const CardSlide = ( { ciudad } ) => {
  const {nombre,pais,id} = ciudad
  const imagen = `./assets/images/C${id}.jpg`;
  return (
    <div  className="tarjeta bg-naranja">
      <div >
        <img src={imagen} alt="city" className="tarjeta_imagen"/>
      </div>
        <div className="tarjeta_pais montserrat"><span>{pais}</span></div>  
        <div className="tarjeta_ciudad montserrat"><span> {nombre}</span> </div>
    </div>
  );
};

export default CardSlide;
