var express = require('express');
var router = express.Router();
var db_rooms = require('../database/reclamacoes');

router.get('/reclamacoes', function(req, res) {
    db_rooms.getReclamacoes(function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result)
    })
})

router.get('/reclamacoes/:id_reclamacao', function(req, res) {
    db_rooms.getUser(req.params.id_reclamacao, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result)
    })
})

router.post('/reclamacoes/', function(req, res) {
    var params = req.body;
    db_rooms.createReclamacao(params.id_usuario, params.id_sala, params.tipo, params.descricao, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.json({status: "201", message: "Usuário criado com sucesso"})
    })
})

router.delete('/reclamacoes/', function(req, res) {
    var params = req.body;
    db_rooms.deleteUser(params.id_reclamacao, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send({message: "Usuário deletado com sucesso"})
    })
})

router.put('/reclamacoes/', function(req, res) {
    var params = req.body;
    db_rooms.updateUser(params.id_reclamacao, params, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send({message: "Usuário atualizado com sucesso"})
    })
})

module.exports = router