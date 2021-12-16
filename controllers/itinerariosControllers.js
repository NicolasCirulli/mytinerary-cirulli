const Itinerario = require("../models/Itinerario");

const itinerariosControllers = {
  obtenerTodosIt: async (req, res) => {
    let itinerario;
    let error = null;

    try {
      itinerario = await Itinerario.find().populate("ciudadRelacionada");
    } catch (err) {
      error = err;
      console.log(error);
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
      ciudadRelacionada,
    } = req.body;
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
    console.log(req.params.id);
    try{

      const prueba = await Itinerario.findOne({_id : req.params.id})
      console.log(prueba);

    }catch(err){
      console.log(err)}
  },
  borrarComentario:async (req, res) => {
    console.log(req);
    
  },
  modificarComentario:async (req, res) => {
    console.log(req);

  }
};

module.exports = itinerariosControllers;
