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
        
        default: 
            return state
    }
}

export default usuariosReducer