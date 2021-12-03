const initialState = {
    ciudades: [],
    ciudad: {}
}

const citiesReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'obtenerTodas':
                return{
                    ...state,
                    ...action.payload
                }
        case 'obtenerUnaCiudad':
            const buscarUna = state.ciudades.find(ciudad => ciudad._id  === action.payload.city) 
                return{
                    ...state,
                    ciudad: buscarUna
                }
        default: 
            return state
    }
}

export default citiesReducer