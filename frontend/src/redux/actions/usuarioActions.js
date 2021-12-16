import axios from "axios"

const usuarioActions = {
    nuevoUsuario: ( {primerNombre, apellido,email,contraseña,fotoPerfil,pais,google})=>{
        return async(dispatch,getState)=>{
           const usuario = await axios.post('http://localhost:4000/api/usuario/registro',{primerNombre, apellido,  email, contraseña, fotoPerfil, pais,google})
           if(usuario.data.success){
               console.log(usuario.data)
                localStorage.setItem('token',usuario.data.response.token)
                dispatch({type:'iniciarSesion', payload:{usuario:usuario.data.response.nuevoUsuario.primerNombre,fotoPerfil: usuario.data.response.nuevoUsuario.fotoPerfil}})
                return usuario
           }else{
            
               return usuario
           }
        }
    },
    iniciarSesion : ({email, contraseña,google})=>{
        return async(dispatch,getState)=>{
            console.log(email, contraseña,google);
            const usuario = await axios.post('http://localhost:4000/api/usuario/iniciarSesion',{email,contraseña,google})
            console.log(usuario.data);
            if(!usuario.data.success){
                return usuario
            }else{
                localStorage.setItem('token',usuario.data.response.token)
                 dispatch({type:'iniciarSesion', payload:{usuario:usuario.data.response.primerNombre,fotoPerfil: usuario.data.response.fotoPerfil}})
                return usuario
            }
        }
    },
    cerrarSesion: () =>{
        return (dispatch,getState) =>{
            localStorage.clear()
            dispatch({type:'cerrar',payload:{}})
        }
    },
    loggearDesdeStorage: (token) =>{
        return async(dispatch,getState) =>{
            try{
                const usuario = await axios.post('http://localhost:4000/api/usuario/iniciarSesion/token',{} ,{
                    headers:{
                        'Authorization':'Bearer '+token 
                    }
                })
                usuario.data.success && dispatch({type:'iniciarSesion', payload:{usuario:usuario.data.response.primerNombre, fotoPerfil: usuario.data.response.fotoPerfil}})
                return usuario.data.success ? usuario.data : null
            }catch(err){console.log(err)}
        }
    },
    borrarCuenta: (token)=>{
        return async(dispatch,getState) =>{
            try{
                const usuario = await axios.post('http://localhost:4000/api/usuario/borrar',{} ,{
                    headers:{
                        'Authorization':'Bearer '+token 
                    }
                })
                console.log(usuario);
            }catch(err){console.log(err)}
        }
    }
}

export default usuarioActions