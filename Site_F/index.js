const express       = require('express');
const bodyParser    = require('body-parser');
var connection      = require('express-myconnection');
var mysql           = require('mysql');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(
    connection(mysql,{
        host: "127.0.0.1",
        user: "root",
        password: "1234",
        database : 'gigadados',
    }, 'request')
);

const route = require('./route')
app.use('/', route)


app.use(express.static(__dirname + '/my-app'))

const port = 3001

app.listen(port, () =>{
    console.log('server running', port)
})