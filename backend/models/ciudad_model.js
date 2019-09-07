const mongoose = require('mongoose'), uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let CiudadSchema = new Schema({
    // relación
    id_pais: { type: Schema.Types.ObjectId, ref: 'Pais', required: [true, 'El país es obligatorio.'] },
    id_depto: { type: Schema.Types.ObjectId, ref: 'Departamento', required: [true, 'El departamento es obligatorio.'] },
    codigo: { type: String, unique: true, required: [true, 'El código es obligatorio.'] },
    // información
    descripcion: { type: String, required: [true, 'La ciudad es obligatoria.'] }
});

CiudadSchema.index({ descripcion: 1, id_depto: 1, id_pais: 1 }, { unique: true });

CiudadSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

let Ciudad = mongoose.model('Ciudad', CiudadSchema, 'Ciudad');

module.exports = Ciudad;