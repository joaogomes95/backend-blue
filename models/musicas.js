const mongoose = require('mongoose');



const musicaModel = new mongoose.Schema({
    nome: { type: String, required: true },
    autor: { type: String, required: true },
    capa: { type: String },
    letra: { type:String },
    genero: { type: String, required: true },
    duracao: { type: Number, required: true },
    dataCriacao: { type: Date, default:Date.now }
})

const Musica = mongoose.model("musica", musicaModel);

module.exports = Musica;