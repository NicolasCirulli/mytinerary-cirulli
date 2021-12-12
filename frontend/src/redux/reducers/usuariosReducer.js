const initialState = {
    usuario: '' 
}

const usuariosReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'iniciarSesion':
                return{
                    ...state,
                    ...action.payload
                }   

        case 'cerrar':
            return{
            ...initialState
            }
        
        default: 
            return state
    }
}

export default usuariosReducer