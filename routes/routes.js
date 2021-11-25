const Router = require('express').Router()
const ciudadesControllers = require('../controllers/ciudadesControllers')

const { cargarUnaCiudad,obtenerTodas,obtenerId,modifarCiudad,borrarCiudad } = ciudadesControllers

Router.route('/ciudades')
.get(obtenerTodas)
// .post(cargarUnaCiudad)

Router.route('/ciudades/:id')
.get(obtenerId)


module.exports = Router
