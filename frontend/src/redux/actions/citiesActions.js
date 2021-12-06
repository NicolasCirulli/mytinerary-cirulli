import axios from "axios"

const citiesActions = {
    obtenerTodas: ()=>{
        return async(dispatch,getState)=>{
           const res = await axios.get('http://localhost:4000/api/ciudades')
           dispatch({type:'obtenerTodas', payload:res.data.respuesta})
        }
    },
    obtenerUnaCiudad: ( city )=>{
        return (dispatch,getState)=>{
                dispatch( { type:'obtenerUnaCiudad', payload: { city } } )    
        }
    },
    filtrarCiudades: ( value , select )=>{
        return(dispatch,getState)=>{
            dispatch({ type:'filtrarCiudades', payload:  { value:value, select:select } })
         }
    },
    resetear: ( )=>{
        return(dispatch,getState)=>{
            dispatch({ type:'resetear', payload:  {ciudad: null  } })
         }
    }

}

export default citiesActions
