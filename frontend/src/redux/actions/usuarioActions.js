import axios from "axios"

const usuarioActions = {
    nuevoUsuario: ( primerNombre, apellido,email,contraseña,fotoPerfil,pais)=>{
        return async(dispatch,getState)=>{
           const usuario = await axios.post('http://localhost:4000/api/usuario/registro',{primerNombre, apellido,  email, contraseña, fotoPerfil, pais})
            return usuario
           
        }
    },
    iniciarSesion : (email, contraseña)=>{
        return async(dispatch,getState)=>{
            const usuario = await axios.post('http://localhost:4000/api/usuario/iniciarSesion',{email, contraseña})
            if(usuario.data.error){
                return usuario
            }else{
                localStorage.setItem('token',usuario.data.response.token)
                dispatch({type:'iniciarSesion', payload:{usuario:usuario.data.response.email}})
                return usuario
            }
        }
    }
}

export default usuarioActions