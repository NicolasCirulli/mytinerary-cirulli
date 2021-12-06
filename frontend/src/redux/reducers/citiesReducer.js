const initialState = {
    ciudades: [],
    ciudad: null,
    ciudadesFiltradas: []
}

const citiesReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'obtenerTodas':
                return{
                    ...state,
                    ciudades:action.payload,
                    ciudadesFiltradas : action.payload
                }
        case 'obtenerUnaCiudad':
                const buscarUna = state.ciudades.find(ciudad => ciudad._id  === action.payload.city) 
                return{
                    ...state,
                    ciudad: buscarUna
                }
        case 'filtrarCiudades':
            let { value, select} = action.payload
            select === 'City' ? select = 'ciudad' : select = 'pais' 
            const filtrarCiudades = state.ciudades.filter( ciudad => ciudad[select].toLowerCase().startsWith( value.toLowerCase().trim() ) ) 
            return{
                ...state,
                ciudadesFiltradas : filtrarCiudades
            }
        case 'resetear':
            return {
                ...state,
                ...action.payload
            }
        default: 
            return state
    }
}

export default citiesReducer