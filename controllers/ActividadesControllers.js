const Actividades = require('../models/Actividades');

const actividadesControllers = {

  crearActividad : async(req, res) => {
    let { titulo, imagen, itinerarioRelacionado} = req.body
    let nuevaActividad = await Actividades ({titulo, imagen, itinerarioRelacionado})
    try{
      await nuevaActividad.save()
      res.json({succes: true, response:nuevaActividad})
    } catch (error) {
      res.json ({success: false, response: error.message})
    }
    
  },

  obtenerActividad :async (req, res) => {
      
    try {
        let actividadesItinerario = await Actividades.find({itinerarioRelacionado: req.params.id})
        res.json({success: true, response: actividadesItinerario})
      } catch (error) {
        res.json({success: false, response: error.message})
      }
    }

  }

module.exports = actividadesControllers