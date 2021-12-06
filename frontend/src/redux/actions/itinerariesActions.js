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
    }
}

export default itinerariesActions
