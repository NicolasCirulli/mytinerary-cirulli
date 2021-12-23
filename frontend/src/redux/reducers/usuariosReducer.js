const initialState = {
    usuario: false,
    rol: false,
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
                ...state,
                usuario: false,
                rol: false,
                fotoPerfil: null,
                email: null,
                _id: null,
            }
        case 'usuarios':
            return{
                ...state,
                usuarios : action.payload
            }
        default: 
            return state
    }
}

export default usuariosReducer