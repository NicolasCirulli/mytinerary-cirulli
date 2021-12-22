import React,{useRef} from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import useDisplay from "../hooks/useDisplay"
import {useSelector, useDispatch} from 'react-redux'
import comentariosActions from "../redux/actions/comentariosActions";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


// import useModal from '../hooks/useModal'

const Itineraries = ({datos}) => {
  // const boton = useDisplay();
  // let precio = []
  // for (let i = 0; i < datos.precio; i++) {
  //   precio.push(<span>💵</span>);
  // }  

  // const modalModificar = useModal(datos);
  // const modalBorrar = useModal(datos)

  // const [value, setValue] = React.useState('Controlled');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  
  // const usuarios = useSelector(store => store.usuariosReducer.usuarios)
  // const email = useSelector(store => store.usuariosReducer.email)
  // const dispatch = useDispatch()
  // const token = localStorage.getItem('token')
  // const comentario = useRef()

  // const agregarComentario = () => {
  //   dispatch(comentariosActions.agregarComentarios(token,datos._id,comentario.current.value))
  //   const falsoId = Math.random()
  //   let datosUsuario = usuarios.find( e => e.email === email)
  //   console.log(datosUsuario);
  //   datos.comentarios.push({
  //     '_id': falsoId,
  //     'comentario' : comentario.current.value,
  //     'idUsuario' : datosUsuario.id
  //   })
  //   boton.HandleDisplay()
  // }
  
  return (
    <>
      {/* <div key={datos.titulo} className="itinerary">
        <h2 className="itinerary_title">{datos.titulo}</h2>
        <div className="itinerary_body bg-oscuro">
          <div className="itinerary_item_uno">
          <div className="itinerary_item_dos mt-2">
            <img src={datos.guiaImg} alt="img"  />
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
          { datos.hashtags.map( hastag => <span className="font-bold texto-negro mx-1"># {hastag} </span> ) }
            </div>
          </div>
        </div>

        {boton.display && (
          <>
          <div className="itinerary_activities">
            <h2>Activities</h2>
            <img src="/assets/images/under.png" alt="" className="under"/>
          </div>
          

          <div className="itinerary_comentarios">
            {datos.comentarios.length > 0 && datos.comentarios.map(comentario=>{
              let datosUsuario = usuarios.find( e => e.id === comentario.idUsuario)
              return <>
              <div className="itinerary_comentarios_comentario">
                <img src={datosUsuario.fotoPerfil} width='50' height='50' alt="usuario"/>
                <span className="itinerary_comentario"> {comentario.comentario} </span>
               { datosUsuario.email === email &&
               <>
               <div className="itinerary_comentarios_iconos">

                  {modalBorrar.crearModalBorrar(comentario._id)}
                  
                  {modalModificar.crearModalModificar(comentario._id)}
               </div>
               </>
               }
              </div>
              </>
            })}
              <div className="agregarComentario">
              {/* <TextField
                  id="outlined-textarea"
                  label="Post a new comment"
                  placeholder=""
                  multiline
                  value={value}
                  onChange={handleChange}
                />
                <Button variant="contained" size="small">
                  Add comment
                </Button> */}
                {/* <input type="text" placeholder="Agregar comentario" className="itinerary_comentarios_input" ref={comentario}/>
                <button  onClick={agregarComentario}>Enviar</button>
              </div>
          </div>
            
          </>
        )}

        <button onClick={boton.HandleDisplay} className="itinerary_btn" >
          {" "}
          {boton.display ? "view less" : "view more"}
        </button>
      </div > */}
    </>
  );
};

export default Itineraries;
