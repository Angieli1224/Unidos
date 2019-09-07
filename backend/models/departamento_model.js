const mongoose = require('mongoose'), uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let DepartamentoSchema = new Schema({
    // relación
    id_pais: { type: Schema.Types.ObjectId, ref: 'Pais', required: [true, 'El país es obligatorio.'] },
    codigo: { type: String, unique: true, required: [true, 'El código es obligatorio.'] },
    // información
    descripcion: { type: String, required: [true, 'La depto es obligatoria.'] }
});

DepartamentoSchema.index({ descripcion: 1, id_pais: 1 }, { unique: true });

DepartamentoSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

let Departamento = mongoose.model('Departamento', DepartamentoSchema, 'Departamento');

module.exports = Departamento;