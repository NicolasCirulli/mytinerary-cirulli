const Usuario =  require('../models/Usuarios')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usuarioControllers = {

    obtenerTodosLosUsuarios:async (req, res) => {
        let error = null
        let respuesta = []
        try{
           const usuarios = await Usuario.find()
           usuarios.map( e =>{
              return respuesta.push({nombre: e.primerNombre, email: e.email, fotoPerfil:e.fotoPerfil, id : e._id})
            })
            res.json({success: true, response: respuesta})
        }catch(error){
            res.json({success: false, response: null})
        }
         
    },

    nuevoUsuario: async (req, res) => {
        let {primerNombre,apellido,email, contraseña,fotoPerfil,pais,google,rol } = req.body
        
        try{
            const emailExiste = await Usuario.findOne({email})
            if(emailExiste){
                res.json({success: false, response:[{message: "This email is already in use."}],error:true})
            }else{
                const contraseñaEncriptada = bcryptjs.hashSync(contraseña, 10)
                const nuevoUsuario = new Usuario({ 
                    primerNombre,
                    apellido,
                    email,
                    contraseña: contraseñaEncriptada,
                    fotoPerfil,
                    pais,
                    google,
                    rol
                })
                const token = jwt.sign({...nuevoUsuario},process.env.SECRET_KEY)
                await nuevoUsuario.save()
                res.json({success: true, response: {token,nuevoUsuario}, error:null})
            }
        }catch(error){ 
            res.json({success:false, response: null,error:true})
        }        
    },
    iniciarSesion: async(req, res)=>{
        let {email, contraseña, google} = req.body
        
        
        try{
            const usuarioEncontrado = await Usuario.findOne({email})

            
            if(usuarioEncontrado){
                
                if(usuarioEncontrado.google && !google){
                    res.json({success:true, response:[{message:"The email/password is incorrect"}],error:null})
                }
                

                let contraseñaCoincide = bcryptjs.compareSync(contraseña, usuarioEncontrado.contraseña)
                if(contraseñaCoincide){

                    
                    
                    const token = jwt.sign({...usuarioEncontrado},process.env.SECRET_KEY)
                    res.json({success: true, response:{token,email,fotoPerfil:usuarioEncontrado.fotoPerfil,primerNombre:usuarioEncontrado.primerNombre,email:usuarioEncontrado.email, _id : usuarioEncontrado._id}, error: null})
                }else{
                    res.json({success:false, response: [{message: "The email/password is incorrect"}],error:true})
                }
            }else{
                return res.json({success:true, response: [{message: "The email/password is incorrect"}],error:true})
            }
            
        }catch(error){
            res.json({success:false, response:[{message: "The email is not registered"}],error:true})
        }
    },
    iniciarConToken:(req, res)=>{
        let {primerNombre,email,fotoPerfil,rol,_id} = req.user
        res.json({success:true, response:{primerNombre ,email, fotoPerfil,rol,_id}})
    },
    borrarCuenta:async(req,res)=>{
        let {_id : id } = req.user
        await Usuario.deleteOne({_id: id })
        res.json({success:true, response:[{mensaje:'Cuenta borrada con exito'}]})
    }
}

module.exports = usuarioControllers