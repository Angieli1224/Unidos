const mongoose = require('mongoose'), uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let PaisSchema = new Schema({
    // relación
    codigo: { type: String, unique: true, required: [true, 'El código es obligatorio.'] },
    // información
    descripcion: { type: String, required: [true, 'La pais es obligatoria.'] }
});

PaisSchema.index({ descripcion: 1 }, { unique: true });

PaisSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

let Pais = mongoose.model('Pais', PaisSchema, 'Pais');

module.exports = Pais;