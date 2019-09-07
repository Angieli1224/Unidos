const { newDataBase } = require('./database');
const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// rutas
const rutas = require('./routes/_index_routes');
app.use('/', rutas);

let server = http.createServer(app).listen(3000, () => {
   console.log('Servicio en linea.');
});

let db = newDataBase(server);