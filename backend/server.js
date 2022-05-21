const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;

//creando con express server usando cors y body-parser como middleware:
app.use(cors());
app.use(bodyParser.json);

//server is listening on port 4000
app.listen(PORT, function () {
  console.log('server está corriendo en puerto ' + PORT);
});
