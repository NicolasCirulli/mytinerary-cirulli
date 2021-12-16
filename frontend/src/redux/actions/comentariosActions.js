import axios from "axios"

const comentariosActions = {
    
   
    
    agregarComentarios: (token,id,comentario)=>{
        return async (dispatch,getState)=>{
            try{
                const usuario = await axios.post('http://localhost:4000/api//itinerarios/comentarios/'+id,{comentario}
                ,
                {
                    headers:{
                        'Authorization':'Bearer '+token 
                    }
                })
                console.log(usuario);
            }catch(err){console.log(err)}
        }
    },
    borrarComentario: (token,id)=>{
        return async (dispatch,getState)=>{
            try{
                const usuario = await axios.delete('http://localhost:4000/api//itinerarios/comentarios/'+id,
                
                {
                    headers:{
                        'Authorization':'Bearer '+token 
                    }
                })
                console.log(usuario);
            }catch(err){console.log(err)}
        }
    },
    modificarComentario: (token,id,actualizacion)=>{
        return async (dispatch,getState)=>{
            try{
                const usuario = await axios.put('http://localhost:4000/api//itinerarios/comentarios/'+id,{actualizacion},               
                { 
                    headers:{
                        'Authorization':'Bearer '+token 
                    }
                })
                console.log(usuario);
            }catch(err){console.log(err)}
        }
    },

}

export default comentariosActions