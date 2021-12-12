import axios from "axios"

const usuarioActions = {
    nuevoUsuario: ( primerNombre, apellido,email,contraseña,fotoPerfil,pais)=>{
        return async(dispatch,getState)=>{
           const usuario = await axios.post('http://localhost:4000/api/usuario/registro',{primerNombre, apellido,  email, contraseña, fotoPerfil, pais})
           if(usuario.data.success){
                localStorage.setItem('token',usuario.data.response.token)
                return usuario
           }else{
               return usuario
           }
        }
    },
    iniciarSesion : (email, contraseña)=>{
        return async(dispatch,getState)=>{
            const usuario = await axios.post('http://localhost:4000/api/usuario/iniciarSesion',{email, contraseña})
            if(usuario.data.error){
                return usuario
            }else{
                localStorage.setItem('token',usuario.data.response.token)
                dispatch({type:'iniciarSesion', payload:{usuario:usuario.data.response.email,urlFoto: usuario.data.response.fotoPerfil}})
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
                console.log(token);
                const usuario = await axios.post('http://localhost:4000/api/usuario/iniciarSesion/token',{} ,{
                    headers:{
                        'Authorization':'Bearer '+token 
                    }
                })
                console.log(usuario.data);
                usuario.data.success && dispatch({type:'iniciarSesion', payload:{usuario:usuario.data.response.email, fotoPerfil: usuario.data.response.fotoPerfil}})
            }catch(err){console.log(err)}
        }
    }
}

export default usuarioActions