const mongoose = require("mongoose");

const itinerarioSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    guia: { type: String, required: true },
    guiaImg: { type: String, required: true },
    precio: { type: Number, required: true },
    duracion: {type: Number, required: true},
    likes: {type: Number, required: true},
    hashtags: [{type: String, required: true}],
    comentarios: { type: String },
    ciudadRelacionada: { type:mongoose.Types.ObjectId, ref:'Ciudad' }
});

const Itinerario = mongoose.model("itinerario", itinerarioSchema);

module.exports = Itinerario;