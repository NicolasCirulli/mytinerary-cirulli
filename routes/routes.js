const Router = require('express').Router()
const validator = require('../config/validator')
const passport = require('../config/passport')
const ciudadesControllers = require('../controllers/ciudadesControllers')
const itinerariosControllers = require('../controllers/itinerariosControllers')
const usuariosControllers = require('../controllers/usuariosControllers')

const {cargarUnaCiudad,obtenerTodas,obtenerUnaCiudad,modifarCiudad,borrarCiudad } = ciudadesControllers
const {obtenerTodosIt,agregarItinerario,obtenerUnIt,borrarItinerario,modificarItinerario,obtenerItinerariosPorCiudad,borrarComentario,modificarComentario,agregarComentarios} = itinerariosControllers
const {nuevoUsuario,iniciarSesion,iniciarConToken,borrarCuenta,obtenerTodosLosUsuarios} = usuariosControllers;


// Ciudades
Router.route('/ciudades')
.get(obtenerTodas)
.post(cargarUnaCiudad)

Router.route('/ciudades/:id')
.get(obtenerUnaCiudad)
.delete(borrarCiudad)
.put(modifarCiudad)



// ITinerarios
Router.route('/itinerarios')
.get(obtenerTodosIt)
.post(passport.authenticate('jwt',{session:false}),agregarItinerario)

Router.route('/itinerario/:idCiudad')
.get(obtenerItinerariosPorCiudad)

Router.route('/itinerarios/:id')
.get(obtenerUnIt)
.delete(passport.authenticate('jwt',{session:false}),borrarItinerario)
.put(passport.authenticate('jwt',{session:false}),modificarItinerario)


// Comentarios en los itinerarios
Router.route('/itinerarios/comentarios/:id')
.post(passport.authenticate('jwt',{session:false}),agregarComentarios)
.delete(passport.authenticate('jwt',{session:false}),borrarComentario)
.put(passport.authenticate('jwt',{session:false}),modificarComentario)


// Usuarios

Router.route('/usuarios')
.get(obtenerTodosLosUsuarios)

Router.route('/usuario/registro')
.post(validator, nuevoUsuario)

Router.route('/usuario/iniciarSesion')
.post(iniciarSesion)

Router.route('/usuario/iniciarSesion/token')
.post(passport.authenticate('jwt',{session:false}),iniciarConToken)

Router.route('/usuario/borrar')
.post(passport.authenticate('jwt',{session:false}),borrarCuenta)

module.exports = Router


