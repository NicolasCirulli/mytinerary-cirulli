const initialState = {
    itinerarios: [],
    itinerariosCiudad: [],
    itinerario: {}
}

const itinerariesReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'obtenerTodos':
                return{
                    ...state,
                    ...action.payload
                }
        case 'obtenerItinerariosPorCiudad':
                return{
                    ...state,
                    ...action.payload 
                }
        default: 
            return state
    }
}

export default itinerariesReducer