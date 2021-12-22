const Itinerario = require("../models/Itinerario");

const itinerariosControllers = {
  obtenerTodosIt: async (req, res) => {
    let itinerario;
    let error = null;

    try {
      itinerario = await Itinerario.find().populate("ciudadRelacionada");
    } catch (err) {
      error = err;
    }

    res.json({
      respuesta: error ? "ERROR" : itinerario,
      success: error ? false : true,
      error: error,
    });
  },
  agregarItinerario: (req, res) => {
    const {
      titulo,
      precio,
      duracion,
      likes,
      hashtags,
      imagen,
      ciudadRelacionada,
    } = req.body;
    console.log(req.body);
    let { _id: id, primerNombre: guia, fotoPerfil: guiaImg } = req.user;
    if (req.user.rol === "guia") {
      new Itinerario({
        titulo,
        guia,
        guiaImg,
        precio,
        duracion,
        likes,
        hashtags,
        imagen,
        ciudadRelacionada,
        idGuia: id,
      })
        .save()
        .then((respuesta) => res.json({ respuesta }))
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Nunca debería llegar a este else, si llega aca revisar las condiciones del front
      res.json({
        success: false,
        error: [
          { message: "Esta funcion solo esta disponible para los guias" },
        ],
      });
    }
  },
  obtenerUnIt: async (req, res) => {
    let itinerario;
    const id = req.params.id;

    try {
      itinerario = await Itinerario.findOne({ _id: id }).populate(
        "ciudadRelacionada"
      );
    } catch (err) {
      console.log(err);
    }

    res.json({ respuesta: itinerario, success: true });
  },

  borrarItinerario: async (req, res) => {
    const id = req.params.id;
    let { _id: guia } = req.user;
    if (req.user.rol === "guia") {
      try {
        const itinerarioABorrar = await Itinerario.findOne({ _id: id });
        if (itinerarioABorrar.idGuia) {
          const borrado = await Itinerario.findOneAndDelete({ idGuia: guia });
          if (borrado) {
            res.json({
              respuesta: {
                itenerarioABorrar: itinerarioABorrar,
                borrado: borrado,
              },
              success: true,
            });
          } else {
            res.json({
              respuesta: [{ message: "solo podes borrar tus itinerarios" }],
              success: true,
            });
          }
        } else {
          res.json({
            respuesta: [{ message: "solo podes borrar tus itinerarios" }],
            success: true,
          });
        }
      } catch (err) {
        res.json({ respuesta: { err }, success: false });
      }
    }
  },

  modificarItinerario: async (req, res) => {
    console.log("Llegue al controller");
    let id = req.params.id;
    let itinerario = req.body;
    let { _id: guia } = req.user;
    try {
      const itinerarioAActualizar = await Itinerario.findOne({ _id: id });

      if (itinerarioAActualizar.idGuia) {
        console.log("entre al if");
        console.log(itinerario.body);
        const actualizacion = await Itinerario.findOneAndUpdate(
          { idGuia: guia },
          itinerario.body,
          { new: true }
        );
        if (actualizacion) {
          res.json({ success: true, response: actualizacion, error: null });
        } else {
          res.json({
            respuesta: [{ message: "solo podes modificar tus itinerarios" }],
            success: true,
            error: true,
          });
        }
      }
    } catch (err) {
      res.json({
        respuesta: [{ message: "Cayo en el catch del controller" }],
        success: false,
        error: true,
      });
    }
  },
  obtenerItinerariosPorCiudad: async (req, res) => {
    try {
      const itinerariosDeCiudad = await Itinerario.find({
        ciudadRelacionada: req.params.idCiudad,
      });
      res.json({ respuesta: itinerariosDeCiudad });
    } catch (err) {
      console.log(err);
    }
  },

  


  agregarComentarios:async (req, res) => {
    console.log(req.user);
    console.log(req.body);
    const id = req.params.id
    try{
      const agregarComentario = await Itinerario.findOneAndUpdate(
        {_id:id}, // id del itinerario
        {
          $push:{comentarios:{ // Propiedad a la que voy a pushear dentro del itinerario
            comentario : req.body.comentario, // Comentario que me llega en el body
            idUsuario : req.user._id // Id del usuario
          }
        }            
        }, 
        {new:true}
      )
      if(agregarComentario){
        res.json({success:true, response: agregarComentario, error:false })
      }else{
        res.json({success:false, response: [{message:'Itinerario no encontrado'}], error:true })
      }
    }catch(err){
      console.log(err)}
  },
  borrarComentario:async (req, res) => {
    // console.log(req.body);
    const idComentario = req.body.idComentario
    const id = req.params.id
    console.log(idComentario);
    try{
      const itinerario = await Itinerario.findOneAndUpdate(
        {_id : id},
        {
          $pull: {
             comentarios:{
              //  idUsuario : req.user._id,
              _id: idComentario
             }
          }
        },{new:true}
        
        )
      if(itinerario){
        res.json({success:true, response:itinerario, error:false })
      }else{
        res.json({success:false, response:[{message:'No se pudo eliminar el comentario'}], error:true })

      }
    }catch(err){
      console.log(err)}


    
  },
  modificarComentario:async (req, res) => {
    console.log(req.body);
    const idComentario = req.body.idComentario
    const actualizacion = req.body.actualizacion
    const idUsuario = req.user._id
    console.log(idComentario);
    
    try{
      const itinerario = await Itinerario.findOneAndUpdate(

        {'comentarios._id' : idComentario},
        { $set: { "comentarios.$.comentario": actualizacion} },
        {new:true}

        
      //   db.collection.updateMany(
      //     { <query conditions> },
      //     { <update operator>: { "<array>.$[<identifier>]" : value } },
      //     { arrayFilters: [ { <identifier>: <condition> } ] }
      //  )

        )

       if(itinerario){
        res.json({success:true, response:itinerario, error:false })
       }else{
        res.json({success:false, response:[{message:'No se pudo eliminar el comentario'}], error:true })
      }
    }catch(err){
      console.log(err)}

  },
  likearItinerario: async(req, res)=> {
    const {idItinerario, bool } = req.body;
    const idUsuario = req.user._id
    try {
      const itinerario = await Itinerario.findOneAndUpdate(
        { _id: idItinerario },
        bool 
        ? { $addToSet: { likes: idUsuario } } 
        : { $pull: { likes: idUsuario } },
        { new: true }
      );
      res.json({ success: true, response: itinerario, error: null });
    } catch (e) {
      console.log(e);
    }
  },    
}

module.exports = itinerariosControllers;
