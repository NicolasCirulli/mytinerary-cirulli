import axios from "axios"

const usuarioActions = {
    nuevoUsuario: ( {primerNombre, apellido,email,contraseña,fotoPerfil,pais})=>{
        return async(dispatch,getState)=>{
           const usuario = await axios.post('http://localhost:4000/api/usuario/registro',{primerNombre, apellido,  email, contraseña, fotoPerfil, pais})
           if(usuario.data.success){
               console.log('llegue aca en el action');
                localStorage.setItem('token',usuario.data.response.token)
                dispatch({type:'iniciarSesion', payload:{usuario:usuario.data.response.nuevoUsuario.primerNombre,urlFoto: usuario.data.response.nuevoUsuario.fotoPerfil}})
                return usuario
           }else{
               console.log(usuario);
               return usuario
           }
        }
    },
    iniciarSesion : ({email, contraseña})=>{
        return async(dispatch,getState)=>{
            const usuario = await axios.post('http://localhost:4000/api/usuario/iniciarSesion',{email, contraseña})
            if(usuario.data.error){
                console.log('if action linea 23');
                return usuario
            }else{
                console.log(usuario.data);
                localStorage.setItem('token',usuario.data.response.token)
                 dispatch({type:'iniciarSesion', payload:{usuario:usuario.data.response.primerNombre,urlFoto: usuario.data.response.fotoPerfil}})
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
            }catch(err){console.log(err)}
        }
    }
}

export default usuarioActions