const Router = require('express').Router()
const ciudadesControllers = require('../controllers/ciudadesControllers')
const itinerariosControllers = require('../controllers/itinerariosControllers')
const {cargarUnaCiudad,obtenerTodas,obtenerUnaCiudad,modifarCiudad,borrarCiudad } = ciudadesControllers
const {obtenerTodosIt,agregarItinerario,obtenerUnIt,borrarItinerario,modificarItinerario,obtenerItinerariosPorCiudad} = itinerariosControllers


Router.route('/ciudades')
.get(obtenerTodas)
.post(cargarUnaCiudad)

Router.route('/ciudades/:id')
.get(obtenerUnaCiudad)
.delete(borrarCiudad)
.put(modifarCiudad)

Router.route('/itinerarios')
.get(obtenerTodosIt)
.post(agregarItinerario)

Router.route('/itinerario/:idCiudad')
.get(obtenerItinerariosPorCiudad)

Router.route('/itinerarios/:id')
.get(obtenerUnIt)
.delete(borrarItinerario)
.put(modificarItinerario)

module.exports = Router


