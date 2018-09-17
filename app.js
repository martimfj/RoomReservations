require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Import Routes
var room_router = require('./routes/room_route')
var curso_router = require('./routes/curso_route')
var user_router = require('./routes/user_route')

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

//Routers
app.use('/', room_router)
app.use('/', curso_router)
app.use('/', user_router)

app.use(express.static(__dirname + '/frontend'))

const port = process.env.ENV_PORT

app.listen(port, () => {
    console.log(`Servidor está executando na porta ${port}.`)
})