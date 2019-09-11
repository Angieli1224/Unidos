const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario_model');

router.get('/enlaces', (req, res) => {
//con el código 2020 estamos definiendo que el usuario es un enlace
   Usuario.find({ id_enlace: 2020 }).exec().then(val => {

      if (val.length == 0) {
         res.status(400).json({
            mensaje: 'No se encontraron registros que coincidan con los parametros de búsqueda.',
            detalle: error
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

router.get('/enlaces/participantes', (req, res) => {

   Usuario.find({ id_enlace: req.query.identificacion }).exec().then(val => {

      if (val.length == 0) {
         res.status(400).json({
            mensaje: 'No se encontraron registros que coincidan con los parametros de búsqueda.',
            detalle: error
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

router.put('/enlaces/crear', (req, res) => {

   Usuario.findByIdAndUpdate(req.body.id, { id_enlace: 2020 }).exec().then(val => {

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

router.put('/enlaces/eliminar', (req, res) => {

   Usuario.findByIdAndUpdate(req.body.id, { id_enlace: req.body.id_enlace }).exec().then(val => {

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

router.get('/consultar', (req, res) => {

   Usuario.find(req.query).exec().then(val => {

      if (val.length == 0) {
         res.status(400).json({
            mensaje: 'No se encontraron registros que coincidan con los parametros de búsqueda.',
            detalle: error
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
   body['trabaja'] = body['trabaja'] == 'SI' ? true : false;
   let registro = new Usuario(req.body);

   registro.save().then(val => {
      res.json({
         msg: 'se guardó'
      })
   }).catch(error => {
      res.status(500).json({
         mensaje: 'Ocurrió un error inesperado.',
         detalle: error
      });
   });

});

router.put('/actualizar', (req, res) => {

   Usuario.findByIdAndUpdate(req.body.id, req.body.datos).exec().then(val => {

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

router.post('/acceso', (req, res) => {

   let body = req.body;
   
   if (!body['identificacion']) {
      res.status(400).json({
         mensaje: 'Se esperaba el campo "identificacion".'
      });
   } else if (!body['contrasena']) {
      res.status(400).json({
         mensaje: 'Se esperaba el campo "contrasena".'
      });
      
      
   }

   Usuario.findOne({ identificacion: body['identificacion'] }).exec().then(usuario => {

      if (!usuario) {
         res.status(400).json({
            mensaje: 'El usuario no está registrado.'
         });
      } else if (!usuario['contrasena']) {
         res.status(400).json({
            mensaje: 'El usuario no tiene contraseña.'
         });
      } else if (usuario['contrasena'] != body['contrasena']) {
         res.status(400).json({
            mensaje: 'La contraseña no coincide.'
         });
      } else {
         res.json(usuario);
      }

   }).catch(error => {
      res.status(500).json({
         mensaje: 'Ocurrió un error inesperado.',
         detalle: error
      });
   });


  

});

module.exports = router;