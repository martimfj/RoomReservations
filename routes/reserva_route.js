var express = require('express');
var router = express.Router();
var db_rooms = require('../database/reservas');

router.get('/reservas', function(req, res) {
    db_rooms.getReservas(function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result)
    })
})

router.get('/reserva/:id_reserva', function(req, res) {
    db_rooms.getReserva(req.params.id_reserva, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result)
    })
})

router.post('/reserva/', function(req, res) {
    var params = req.body;
    db_rooms.createReserva(params.id_usuario, params.id_sala, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(201).send({message: "Sala reservada com sucesso"})
    })
})

router.delete('/reserva/', function(req, res) {
    var params = req.body;
    db_rooms.deleteReserva(params.id_reserva, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send({message: "Reserva deletada com sucesso"})
    })
})

router.put('/reserva/', function(req, res) {
    var params = req.body;
    db_rooms.updateReserva(params.id_reserva, params, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send({message: "Reserva atualizada com sucesso"})
    })
})

module.exports = router