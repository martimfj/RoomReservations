var express = require('express');
var router = express.Router();
var db_rooms = require('../database/rooms');

router.get('/salas', function(req, res) {
    db_rooms.getSalas(function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        if(result.length < 0){
            res.status(404).send({error: "Não existe salas cadastradas no banco de dados."})
        }
        res.status(200).send(result)
    })
})

router.get('/sala/:id_sala', function(req, res) {
    db_rooms.getSala(req.params.id_sala, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        if(result.length < 0){
            res.status(404).send({error: "Não existe uma sala com esse ID no banco de dados."})
        }
        res.status(200).send(result)
    })
})

router.post('/sala/', function(req, res) {
    var params = req.body;
    db_rooms.createSala(params.nome, params.lugares, function(err, result){
        if (err){
            res.status(500).send({error : "Erro na criação de uma sala no banco de dados." })
            console.log(err)
            throw err
        }
        res.status(201).send({message: "Sala criada com sucesso."})
    })
})

router.delete('/sala/', function(req, res) {
    var params = req.body;
    db_rooms.deleteSala(params.id_sala, function(err, result){
        if (err){
            res.status(500).send({error : "Erro na remoção de uma sala do banco de dados." })
            console.log(err)
            throw err
        }
        res.status(200).send({message: "Sala removida com sucesso."})
    })
})

router.put('/sala/', function(req, res) {
    var params = req.body;
    db_rooms.updateSala(params.id_sala, params.nome, params.lugares, function(err, result){
        if (err){
            res.status(500).send({error : "Erro ao atualizar dados da sala do banco de dados." })
            console.log(err)
            throw err
        }
        res.status(200).send({message: "Sala atualizada com sucesso."})
    })
})

module.exports = router