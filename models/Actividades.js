const mongoose = require("mongoose");


const actividadesSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    imagen: {type: String},
    itinerarioRelacionado: { type:mongoose.Types.ObjectId, ref:'Itinerario' },
    
});

const Actividades = mongoose.model("actividades", actividadesSchema);

module.exports = Actividades;