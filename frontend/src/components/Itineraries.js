import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import useDisplay from "../hooks/useDisplay"
import {useSelector, useDispatch} from 'react-redux'
import itinerariesActions from "../redux/actions/itinerariesActions";
import comentariosActions from "../redux/actions/comentariosActions";

const Itineraries = ({datos}) => {
  const boton = useDisplay();
  let precio = []
  for (let i = 0; i < datos.precio; i++) {
    precio.push(<span>💵</span>);
  }  

  const simularActualizacion = {
    'titulo' : 'probando un titulo nuevo'
  }

  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  const borrarItinerario = () => dispatch(itinerariesActions.borrarItinerario(token,datos._id))
  const modificarItinerario = () => dispatch(itinerariesActions.modificarItinerario(token,datos._id,{...simularActualizacion}))


  const agregarComentario = () => dispatch(comentariosActions.agregarComentarios(token,datos._id,'segundo comentario de prueba'))
  const modificar = ()=> dispatch(comentariosActions.modificarComentario(token,datos._id,datos.comentarios[0]._id,'comentario actualizado'))
  const borrar = ()=> dispatch(comentariosActions.borrarComentario(token,datos._id,datos.comentarios[3]._id))

  return (
    <>
      <div key={datos.titulo} className="itinerary">
        <h2 className="itinerary_title">{datos.titulo}</h2>
        <div className="itinerary_body bg-oscuro">
          <div className="itinerary_item_uno">
          <div className="itinerary_item_dos mt-2">
            <img src={`/assets/images/${datos.guiaImg}.jpg`} alt="img"  />
            <h2 className="font-bold texto-negro"> {datos.guia} </h2>
          </div>
            <span> <span className="font-bold texto-negro">Price :</span> {precio.map( e =>  e)}</span>
            <span className="font-bold texto-negro">Duration :  {datos.duracion} hs</span>
          </div>

          <div className="itinerary_item_tres">
            
            <div >{datos.likes > 0 
              ? <>  <FcLike/> <span className="font-bold ">{datos.likes}</span></> 
              : <>  <FcLikePlaceholder/> <span className="font-bold">{datos.likes}</span></> }</div>

            <div className="itinerary_hastag">
          { datos.hashtags.map( hastag => <span className="font-bold texto-negro mx-1">{hastag} </span> ) }
            </div>
          </div>
        </div>

        {boton.display && (
          <div className="itinerary_activities">
            <img src="/assets/images/under.png" alt="" className="under"/>
            <div className="d-flex flex-column text-center bg-oscuro ">
          { datos.comentarios.length > 0 && datos.comentarios.map(e=> {
            return (
              <>
              <div>
                <p>{e}</p>
                <button onClick={modificar} >Modificar</button>
                <button onClick={borrar} >Borrar</button>
              </div>
              </>
            )
          } )}
            </div>
          </div>
        )}

        <button onClick={boton.HandleDisplay} className="itinerary_btn" >
          {" "}
          {boton.display ? "view less" : "view more"}
        </button>
        <button onClick={agregarComentario}>Agregar comentario</button>
        <button onClick={borrar}>Borrar comentario</button>
        <button onClick={modificar}>Modificar comentario</button>
        <button onClick={borrarItinerario}>Borrar Itinerario</button>
        <button onClick={modificarItinerario}>Modificar Itinerario</button>
      </div >
    </>
  );
};

export default Itineraries;
