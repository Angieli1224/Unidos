const mongoose = require('mongoose'),uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let SugerenciaSchema = new Schema({

   // id_usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: [true, 'Se requiere el "id_usuario" para crear el registro.'] },
   id_usuario: { type: Number, required: [true, 'Se requiere el "id_usuario" para crear el registro.'] },
   id_enlace: { type: Number, required: [true, 'Se requiere el "id_enlace" para crear el registro.'] },
   asunto: { type: String, required: [true, 'Se requiere el "asunto" para crear el registro.'] },
   descripcion: { type: String, required: [true, 'Se requiere el "descripcion" para crear el registro.'] },
   estado: { type: String, default: 'Pendiente' }
});

let Sugerencia = mongoose.model('Sugerencia', SugerenciaSchema, 'Sugerencia');

module.exports = Sugerencia;