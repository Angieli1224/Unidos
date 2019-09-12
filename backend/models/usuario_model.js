const mongoose = require('mongoose'), uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
   // relacion
   id_enlace: { type: Number, required: [true, 'Por favor ingrese la identificaión del enlace.'] },
   identificacion: { type: Number, unique: true, required: [true, 'Se requiere el nbúmero de identificación.'] },
   //datos
   nombre: { type: String, required: [true, 'Se requiere el nombre.'] },
   apellido: { type: String, required: [true, 'Se requiere el apellido.'] },
   contrasena: { type: String, required: [true, 'Se requiere la contraseña.'] },
   telefono: { type: Number, required: [true, 'Se requiere el teléfono.'] },
   direccion: { type: String, required: [true, 'Se requiere la dirección.'] },
   ciudad: { type: String, required: [true, 'Se requiere la ciudad.'] },
   comuna: { type: Number, required: [true, 'Se requiere la comuna.'] },
   puesto_votacion: { type: String, required: [true, 'Se requiere el puesto de votación.'] },
   mesa_votacion: { type: Number, required: [true, 'Se requiere la mesa de votación.'] },
   nivel_escolaridad: { type: String, required: [true, 'se requiere nivel de escolaridad'] },
   perfil_ocupacional: { type: String, required: [true, 'se requiere perfil ocupacional'] },
   trabaja: { type: Boolean },
   personas_cargo: { type: Number }
});

UsuarioSchema.index({ id_enlace: 1, identificacion: 1 }, { unique: true });

UsuarioSchema.plugin(uniqueValidator, { message: 'ya exite en en sistema' });

let Usuario = mongoose.model('Usuario', UsuarioSchema, 'Usuario');

module.exports = Usuario;