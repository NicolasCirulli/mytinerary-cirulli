const initialState = {
    usuario: false,
    // fotoPerfil: false
}

const usuariosReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'iniciarSesion':
                return{
                    ...state,
                    ...action.payload,
                    
                }   

        case 'cerrar':
            return{
            ...initialState
            }
        case 'usuarios':
            return{
                ...initialState,
                usuarios : action.payload
            }
        default: 
            return state
    }
}

export default usuariosReducer