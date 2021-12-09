const Usuario =  require('../models/Usuarios')
const bcryptjs = require('bcryptjs')

const usuarioControllers = {
    nuevoUsuario: async (req, res) => {
        let {primerNombre,apellido,email, contraseña,fotoPerfil,pais } = req.body
        try{
            const emailExiste = await Usuario.findOne({email})
            if(emailExiste){
                res.json({success: false, error: "The email is already in use.", response:null })
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
                await nuevoUsuario.save()
                res.json({success: true, response: nuevoUsuario, error:null})
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
                    res.json({success: true, response:{email}, error: null})
                }else{
                    res.json({success:false, response: null, error: "The email/password is incorrect"})
                }
            }else{
                res.json({success:false, response: null, error: "The email/password is incorrect"})
            }
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = usuarioControllers