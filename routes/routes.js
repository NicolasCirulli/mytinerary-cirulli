const Router = require('express').Router()
const validator = require('../config/validator')

const ciudadesControllers = require('../controllers/ciudadesControllers')
const itinerariosControllers = require('../controllers/itinerariosControllers')
const usuariosControllers = require('../controllers/usuariosControllers')

const {cargarUnaCiudad,obtenerTodas,obtenerUnaCiudad,modifarCiudad,borrarCiudad } = ciudadesControllers
const {obtenerTodosIt,agregarItinerario,obtenerUnIt,borrarItinerario,modificarItinerario,obtenerItinerariosPorCiudad} = itinerariosControllers
const {nuevoUsuario} = usuariosControllers;

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

Router.route('/usuario/registro')
.post(validator, nuevoUsuario)

module.exports = Router


