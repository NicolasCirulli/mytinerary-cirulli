const mongoose = require('mongoose')

const ciudadSchema = new mongoose.Schema({
   
    ciudad: { type:String, required:true },
    pais: {type:String, required:true},
    descripcion: {type:String, required:true},
    imagen:{type:String, required:true},
    divisa: {type:String },
    idioma: {type:String},

})

const Ciudad = mongoose.model( 'Ciudad', ciudadSchema )

module.exports = Ciudad