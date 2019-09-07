const express = require('express');
const router = express.Router();

const Sugerencia = require('../models/sugerencia_model');
const Usuario = require('../models/usuario_model');

router.get('/', (req, res) => {

   Sugerencia.find({}).populate('id_usuario').populate('id_enlace').exec().then(val => {

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

router.post('/', (req, res) => {

   let body = req.body;

   Usuario.findOne({ identificacion: body['id_enlace'] }).exec().then(enlace => {

      body['id_enlace'] = enlace._id;

      let registro = new Sugerencia(body);

      registro.save().then(val => {

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

   }).catch(error);

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