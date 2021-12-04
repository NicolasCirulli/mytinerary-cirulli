const initialState = {
    ciudades: [],
    ciudad: {},
    ciudadesFiltradas: []
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
        case 'filtrarCiudades':
            const filtrarCiudades = state.ciudades.filter( ciudad => ciudad.ciudad.toLowerCase().startsWith( action.payload.toLowerCase().trim() ) ) 
            return{
                ...state,
                ciudadesFiltradas : filtrarCiudades
            }
        default: 
            return state
    }
}

export default citiesReducer