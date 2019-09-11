const express = require('express');
const router = express.Router();

const Sugerencia = require('../models/sugerencia_model');
const Usuario = require('../models/usuario_model');

router.get('/', async (req, res) => {

   // Sugerencia.find({}).populate('id_usuario').populate('id_enlace').exec().then(val => {
     await Sugerencia.find({}).exec().then(val => {
      
   if (!val) {
         res.status(500).json({
            mensaje: 'Ocurrió un error inesperado.',
            detalle: 'La base de datos no devolvió el registro actualizado.'
         });
      } else {
         res.json(val);
      }

   }).catch(error => {
      res.status(500).json({
         mensaje: 'Ocurrió un error inesperado.',
         detalle: error
      });
   });

});

router.post('/', async (req, res) => {

   let body = req.body;
console.log("estes es el id usuario del servidor "+body['id_usuario']);

   await Usuario.findOne({ identificacion: body['id_usuario'] }).exec().then(async usuario => {

      body['id_enlace'] = usuario.id_enlace;
      console.log("Este es el usuario que se encontro "+usuario.id_enlace);
      

      let registro = new Sugerencia(body);

      await registro.save().then(val => {

         if (!val) {
            res.status(500).json({
               mensaje: 'Ocurrió un error inesperado.',
               detalle: 'La base de datos no devolvió el registro creado.'
            });
         } else {
            res.json({
               mensaje: 'Gracias por su aporte.'
            });
         }

      }).catch(error => {
         res.status(500).json({
            mensaje: 'Ocurrió un error inesperado.',
            detalle: error
         });
      });

   }).catch(error => {
      res.status(500).json({
         mensaje: 'Ocurrió un error inesperado.',
         detalle: error
      });
   });

});

router.put('/actualizar', (req, res) => {

   Sugerencia.findByIdAndUpdate(req.body.id, { estado: req.body.estado }).exec().then(val => {

      if (!val) {
         res.status(500).json({
            mensaje: 'Ocurrió un error inesperado.',
            detalle: 'La base de datos no devolvió el registro actualizado.'
         });
      } else {
         res.json(val);
      }

   }).catch(error => {
      res.status(500).json({
         mensaje: 'Ocurrió un error inesperado.',
         detalle: error
      });
   });

});

module.exports = router;