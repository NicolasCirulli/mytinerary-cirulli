const Usuario =  require('../models/Usuarios')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usuarioControllers = {
    nuevoUsuario: async (req, res) => {
        let {primerNombre,apellido,email, contraseña,fotoPerfil,pais } = req.body
        try{
            const emailExiste = await Usuario.findOne({email})
            if(emailExiste){
                res.json({success: false, response:[{message: "This email is already in use."}]})
            }else{
                const contraseñaEncriptada = bcryptjs.hashSync(contraseña, 10)
                const nuevoUsuario = new Usuario({ 
                    primerNombre,
                    apellido,
                    email,
                    contraseña: contraseñaEncriptada,
                    fotoPerfil,
                    pais
                })
                const token = jwt.sign({...nuevoUsuario},process.env.SECRET_KEY)
                await nuevoUsuario.save()
                res.json({success: true, response: {token,nuevoUsuario}, error:null})
            }
        }catch(error){ 
            res.json({success:false, response: null})
        }        
    },
    iniciarSesion: async(req, res)=>{
        let {email, contraseña} = req.body
        try{
            const usuarioEncontrado = await Usuario.findOne({email})
            
            if(usuarioEncontrado){
                let contraseñaCoincide = bcryptjs.compareSync(contraseña, usuarioEncontrado.contraseña)
                if(contraseñaCoincide){
                    const token = jwt.sign({...usuarioEncontrado},process.env.SECRET_KEY)
                    res.json({success: true, response:{token,email,fotoPerfil:usuarioEncontrado.fotoPerfil,primerNombre:usuarioEncontrado.primerNombre}, error: null})
                }else{
                    res.json({success:false, response: [{message: "The email/password is incorrect"}],error:true})
                }
            }else{
                res.json({success:true, response: [{message: "The email/password is incorrect"}],error:true})
            }
        }catch(error){
            console.log(error);
            res.json({success:false, response:null})
        }
    },
    iniciarConToken: async(req, res)=>{
        let {primerNombre,email,fotoPerfil} = req.user
        res.json({success:true, response:{primerNombre ,email, fotoPerfil}})
    }
}

module.exports = usuarioControllers