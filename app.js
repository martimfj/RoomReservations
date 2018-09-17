require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const app = express()

// Import Routes
var room_router = require('./routes/room_route');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

//Routers
app.use('/', room_router);
// Colocar outros routers aqui

app.use(express.static(__dirname + '/frontend'))

const port = process.env.ENV_PORT

app.listen(port, () => {
    console.log(`Servidor está executando na porta ${port}.`)
})