const mongoose = require("mongoose");

// const comentariosSchema = mongoose.Schema.Types.ObjectId;

const itinerarioSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    guia: { type: String, required: true },
    guiaImg: { type: String, required: true },
    precio: { type: Number, min:1, max:5, required: true },
    duracion: {type: Number, required: true},
    likes: [{type: mongoose.Types.ObjectId, ref: "usuario" }],
    hashtags: [{type: String, required: true}],
    imagen: {type: String},
    comentarios: [
        {
            comentario:{type:String},
            idUsuario:{ type:mongoose.Types.ObjectId, ref:'usuario' }
        }
    ],
    ciudadRelacionada: { type:mongoose.Types.ObjectId, ref:'Ciudad' },
    idGuia : { type:mongoose.Types.ObjectId, ref:'usuario' }
});

const Itinerario = mongoose.model("itinerario", itinerarioSchema);

module.exports = Itinerario;