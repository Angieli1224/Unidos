const express = require('express');
const router = express.Router();

const usuarioRoutes = require('./usuario_routes');
const sugerenciasRoutes = require('./sugerencias_routes');

router.get('/', (req, res) => {
   res.send('api de unidos');
});

router.use('/usuario',usuarioRoutes); 
router.use('/sugerencias',sugerenciasRoutes); 

module.exports = router;