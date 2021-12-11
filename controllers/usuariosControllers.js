const Usuario =  require('../models/Usuarios')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usuarioControllers = {
    nuevoUsuario: async (req, res) => {
        let {primerNombre,apellido,email, contraseña,fotoPerfil,pais } = req.body
        try{
            const emailExiste = await Usuario.findOne({email})
            if(emailExiste){
                res.json({success: false, response:[{message: "The email is already in use."}]})
            }else{
                const encryptedPassword = bcryptjs.hashSync(contraseña, 10)

                const nuevoUsuario = new Usuario({ 
                    primerNombre,
                    apellido,
                    email,
                    contraseña: encryptedPassword,
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
            const usarioEncontrado = await Usuario.findOne({email})
            
            if(usarioEncontrado){
                let contraseñaCoincide = bcryptjs.compareSync(contraseña, usarioEncontrado.contraseña)
                if(contraseñaCoincide){
                    const token = jwt.sign({...usarioEncontrado},process.env.SECRET_KEY)
                    console.log(token);
                    res.json({success: true, response:{token,email}, error: null})
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
    }
}

module.exports = usuarioControllers