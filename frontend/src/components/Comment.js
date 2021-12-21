import React,{useState,useRef} from 'react'
import { MdSend } from "react-icons/md";
import { FiDelete, FiEdit3} from "react-icons/fi";
import {useSelector} from 'react-redux'
const Comment =( {datosUsuario,comentario,modificarComentario,borrarComentario} )=>{
    const [inputOn, setInputOn] = useState(true);
    const [value, setValue] = useState('');
    const email = useSelector(store => store.usuariosReducer.email)
    const input = useRef()

    const modificar = (id,value) =>{
        modificarComentario(comentario._id,value)
        setInputOn(!inputOn)
    }

    return ( 
        <>
        <div className="itinerary_comentarios_comentario">
                <img src={datosUsuario.fotoPerfil} width='50' height='50' alt="usuario"/>
                {
                  inputOn 
                  ?<span className="itinerary_comentario"> {comentario.comentario} </span>
                  :<div className="d-flex">
                      <input type='text' className="itinerary_comentario" ref={input} onChange={()=> setValue(input.current.value)}/> 
                      <button onClick={()=>modificar(comentario._id,value)}><MdSend/></button>
                  </div>
                }
               { datosUsuario.email === email &&
               <>
               <div className="itinerary_comentarios_iconos">
                 
                <button type='button' onClick={()=>borrarComentario(comentario._id)}><FiDelete/></button>
                <button onClick={()=>setInputOn(!inputOn)}><FiEdit3/></button>
                  
               </div>
               </>
               }
              </div>
        
        </>
    )

}

export default Comment