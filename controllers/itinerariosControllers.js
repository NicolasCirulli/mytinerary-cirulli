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
    const { titulo, guia, guiaImg, precio, duracion, likes, hashtags, comentarios, ciudadRelacionada } =
      req.body;
    new Itinerario({ titulo, guia, guiaImg, precio, duracion, likes, hashtags, comentarios, ciudadRelacionada })
      .save()
      .then((respuesta) => res.json({ respuesta }))
      .catch((err) => { console.log(err) })
  },
  obtenerUnIt: async (req, res) => {
    let itinerario;
    const id = req.params.id;

    try {
      itinerario = await Itinerario.findOne({ _id: id }).populate("ciudadRelacionada");
    } catch (err) {
      console.log(err);
    }

    res.json({ respuesta: itinerario, success: true });
  },
  borrarItinerario: async (req, res) => {
    const id = req.params.id;
    let itinerario;
    try {
      await Itinerario.findOneAndDelete({ _id: id });
      itinerario = await Itinerary.find();
    } catch (err) {
      console.log(err);
    }
    res.json({ respuesta: itinerario, success: true });
  },
  modificarItinerario: async (req, res) => {
    let id = req.params.id;
    let itinerario = req.body;
    let actualizacion;
    try {
      actualizacion = await Itinerario.findOneAndUpdate({ _id: id }, itinerario, { new: true });
      console.log(actualizacion);
    } catch (err) {
      console.log(err);
    }
    res.json({ success: actualizacion ? true : false });
  },
  obtenerItinerariosPorCiudad: async (req, res) => {
    try{
      const itinerariosDeCiudad = await Itinerario.find({ciudadRelacionada: req.params.idCiudad})
      res.json({respuesta: itinerariosDeCiudad})
    }catch (err) {
      console.log(err);
    }
  }
};

module.exports = itinerariosControllers;