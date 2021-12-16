const Usuario =  require('../models/Usuarios')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usuarioControllers = {
    nuevoUsuario: async (req, res) => {
        let {primerNombre,apellido,email, contraseña,fotoPerfil,pais,google,rol } = req.body
        console.log(google);
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
        console.log(req.body);
        
        try{
            const usuarioEncontrado = await Usuario.findOne({email})
            console.log('busqueda de usuario');
            console.log(usuarioEncontrado.fotoPerfil)

            
            if(usuarioEncontrado){
                
                if(usuarioEncontrado.google && !google){
                    res.json({success:true, response:[{message:"The email/password is incorrect"}],error:null})
                }
                console.log('entre al if de usuario encontrado');

                let contraseñaCoincide = bcryptjs.compareSync(contraseña, usuarioEncontrado.contraseña)
                if(contraseñaCoincide){

                    console.log('entre al if de contraseña coincide');
                    
                    const token = jwt.sign({...usuarioEncontrado},process.env.SECRET_KEY)
                    res.json({success: true, response:{token,email,fotoPerfil:usuarioEncontrado.fotoPerfil,primerNombre:usuarioEncontrado.primerNombre}, error: null})
                }else{
                    console.log('entre al if de contraseña erronea');
                    res.json({success:false, response: [{message: "The email/password is incorrect"}],error:true})
                }
            }else{
                console.log('entre en el ultimo else');
                return res.json({success:true, response: [{message: "The email/password is incorrect"}],error:true})
            }
            
        }catch(error){
            res.json({success:false, response:[{message: "The email is not registered"}],error:true})
        }
    },
    iniciarConToken:(req, res)=>{
        let {primerNombre,email,fotoPerfil} = req.user
        res.json({success:true, response:{primerNombre ,email, fotoPerfil}})
    },
    borrarCuenta:async(req,res)=>{
        let {_id : id } = req.user
        await Usuario.deleteOne({_id: id })
        res.json({success:true, response:[{mensaje:'Cuenta borrada con exito'}]})
    }
}

module.exports = usuarioControllers