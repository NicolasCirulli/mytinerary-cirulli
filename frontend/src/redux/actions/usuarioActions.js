import axios from "axios"

const usuarioActions = {
    nuevoUsuario: ( primerNombre, apellido,  email,contraseña, fotoPerfil, pais)=>{
        return async(dispatch,getState)=>{
           const usuario = await axios.post('http://localhost:4000/api/usuario/registro',{primerNombre, apellido,  email, contraseña, fotoPerfil, pais})
           return usuario
        }
    },
}

export default usuarioActions