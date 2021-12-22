import axios from "axios"

const itinerariesActions = {
    obtenerTodos: ()=>{
        return async(dispatch,getState)=>{
           const res = await axios.get('http://localhost:4000/api/itinerarios')
           dispatch({type:'obtenerTodos', payload:{itinerarios : res.data.respuesta}})
        }
    },
    obtenerItinerariosPorCiudad: ( city )=>{
        return async(dispatch,getState)=>{
            const res = await axios.get('http://localhost:4000/api/itinerario/'+ city)
            dispatch({type:'obtenerItinerariosPorCiudad', payload:{ itinerariosCiudad : res.data.respuesta}})
         }
    },
    resetear:()=>{
        return (dispatch,getState)=>{
            dispatch({type:'resetear', payload:{itinerariosCiudad: null }})
        }
    },
    crearItinerario: (token,titulo,precio,duracion,hashtags,ciudadRelacionada,imagen)=>{
        return async (dispatch,getState)=>{
            try{
                const usuario = await axios.post('http://localhost:4000/api/itinerarios',

                {titulo,precio,duracion,hashtags,imagen,ciudadRelacionada}
                ,
                {
                    headers:{
                        'Authorization':'Bearer '+token 
                    }
                })
                return usuario
            }catch(err){console.log(err)}
        }
    },
    borrarItinerario: (token,id)=>{
        return async (dispatch,getState)=>{
            try{
                const usuario = await axios.delete('http://localhost:4000/api/itinerarios/'+id,
                
                {
                    headers:{
                        'Authorization':'Bearer '+token 
                    }
                })
                console.log(usuario);
            }catch(err){console.log(err)}
        }
    },
    modificarItinerario: (token,id,body)=>{
        return async (dispatch,getState)=>{
            try{
                const usuario = await axios.put('http://localhost:4000/api/itinerarios/'+id,{body},
                
                { 
                    headers:{
                        'Authorization':'Bearer '+token 
                    }
                })
                console.log(usuario);
            }catch(err){console.log(err)}
        }
    },
    likearItinerario:(token,idItinerario,bool)=>{
        return async(dispatch,getState)=>{
            console.log(token,idItinerario,bool)
            try{
                const usuario = await axios.put('http://localhost:4000/api/like',{idItinerario,bool},
                {
                    headers:{
                        'Authorization':'Bearer '+token
                    }
                })
                // console.log(usuario);
                return usuario
            }catch(err){console.log(err)}
        }
    },

    obtenerActividadesItinerario: (id)=>{
        return async (dispatch,getState)=>{
            try{
                const usuario = await axios.get('http://localhost:4000/api/actividades/'+id,)
                console.log(usuario);
                return usuario
            }catch(err){console.log(err)}
        }
    },
    crearActividades : (body)=>{
        return async (dispatch,getState)=>{
            try{
                const usuario = await axios.post('http://localhost:4000/api/actividades',{body})
                console.log(usuario);
                return usuario
            }catch(err){console.log(err)}
        }
    },

}

export default itinerariesActions
