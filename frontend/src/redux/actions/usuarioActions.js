import axios from "axios"

const usuarioActions = {
    nuevoUsuario: ( primerNombre, apellido,email,contraseña,fotoPerfil,pais)=>{
        return async(dispatch,getState)=>{
           const usuario = await axios.post('http://localhost:4000/api/usuario/registro',{primerNombre, apellido,  email, contraseña, fotoPerfil, pais})
           if(!usuario.data.success){
               return usuario
               
           }
            return usuario
           
        }
    },
    iniciarSesion : (email, contraseña)=>{
        return async(dispatch,getState)=>{
            const usuario = await axios.post('http://localhost:4000/api/usuario/iniciarSesion',{email, contraseña})
            console.log(usuario);
            return usuario
        }
    }
}

export default usuarioActions