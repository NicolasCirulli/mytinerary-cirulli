import React,{useRef,useState} from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FiDelete, FiEdit } from "react-icons/fi";
import useDisplay from "../hooks/useDisplay"
import {useSelector, useDispatch} from 'react-redux'
import itinerariesActions from "../redux/actions/itinerariesActions";
import comentariosActions from "../redux/actions/comentariosActions";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Itineraries = ({datos}) => {
  const boton = useDisplay();
  let precio = []
  for (let i = 0; i < datos.precio; i++) {
    precio.push(<span>💵</span>);
  }  

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const [identificador, setIdentificador] = useState(null)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modificado = useRef()

  const usuarios = useSelector(store => store.usuariosReducer.usuarios)
  const email = useSelector(store => store.usuariosReducer.email)

  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const comentario = useRef()

  const modificarComentario = (e) =>{
    e.preventDefault()
    dispatch(comentariosActions.modificarComentario(token,datos._id,identificador,modificado.current.value))
    handleClose()
  }

  const agregarComentario = () => dispatch(comentariosActions.agregarComentarios(token,datos._id,comentario.current.value))
  
  

  return (
    <>
      <div key={datos.titulo} className="itinerary">
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
                <span> {comentario.comentario} </span>
               { datosUsuario.email === email &&
               <>
                  <button 
                   className="btn-comentario text-danger" 
                   onClick={()=> dispatch(comentariosActions.borrarComentario(token,datos._id,comentario._id))}
                   >
                    <FiDelete/>
                  </button>
                  {
                    (
                      <>
                      <div>
                        <Button onClick={handleOpen} className="btn-comentario text-primary"><FiEdit/></Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              <form>
                                <input type='text' placeholder="Comentario a actualizar" ref={modificado} onChange={()=>setIdentificador(comentario._id)}/>
                                <input type="button" value="enviar" onClick={modificarComentario} />
                              </form>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                              Editar comentario
                            </Typography>
                          </Box>
                        </Modal>
                      </div>
                    </>
                    )
                    
                  }
               </>
               }
              </div>
              </>
            })}
              <div>
                <input type="text" placeholder="Agregar comentario" className="itinerary_comentarios_input" ref={comentario}/>
                <button onClick={agregarComentario}>Enviar</button>
              </div>
          </div>
            
          </>
        )}

        <button onClick={boton.HandleDisplay} className="itinerary_btn" >
          {" "}
          {boton.display ? "view less" : "view more"}
        </button>
      </div >
    </>
  );
};

export default Itineraries;
