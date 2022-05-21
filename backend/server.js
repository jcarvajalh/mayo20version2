const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;

//creando con express server usando cors y body-parser como middleware:
app.use(cors());
app.use(bodyParser.json);

//db concector
const mongoose = require('mongoose');

//express router
const rtmRoutes = express.Router();

//create db conecction:
const conecction_string = '';
mongoose.connect(conecction_string, { userNewUrlParser: true });
const conecction = mongoose.connection;

//2. rutas para la peticiones del cliente
rtmRoutes.route('/CrearReq').post(function (req, res) {});
rtmRoutes.route('/CrearDes').post(function (req, res) {});
rtmRoutes.route('/AsignarReq').post(function (req, res) {});

//server is listening on port 4000
app.listen(PORT, function () {
  console.log('server está corriendo en puerto ' + PORT);
});
