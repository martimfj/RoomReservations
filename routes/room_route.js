var express = require('express');
var router = express.Router();
var db_rooms = require('../database/rooms');

router.get('/salas', function(req, res) {
    db_rooms.getSalas(function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result[0])
    })
})

router.get('/sala/:id_sala', function(req, res) {
    db_rooms.getSala(req.params.id_sala, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result[0])
    })
})

router.post('/sala/', function(req, res) {
    var params = req.body;
    db_rooms.createSala(params.nome, params.lugares, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(201).send({message: "Sala criada com sucesso"})
    })
})

router.delete('/sala/', function(req, res) {
    var params = req.body;
    db_rooms.deleteSala(params.id_sala, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send({message: "Sala deletada com sucesso"})
    })
})

router.put('/sala/', function(req, res) {
    var params = req.body;
    db_rooms.updateSala(params.id_sala, params.nome, params.lugares, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send({message: "Sala atualizada com sucesso"})
    })
})

module.exports = router