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

router.get('/reclamacao/:id_reclamacao', function(req, res) {
    db_rooms.getReclamacao(req.params.id_reclamacao, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result)
    })
})

router.post('/reclamacao/', function(req, res) {
    var params = req.body;
    db_rooms.createReclamacao(params.id_usuario, params.id_sala, params.tipo, params.descricao, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.json({status: "201", message: "Usuário criado com sucesso"})
    })
})

router.delete('/reclamacao/', function(req, res) {
    var params = req.body;
    db_rooms.deleteReclamacao(params.id_reclamacao, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send({message: "Usuário deletado com sucesso"})
    })
})
             
router.get('/openreclamacoes', function(req, res) {
    db_rooms.getOpenReclamacoes(function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result)
    })
})

router.get('/closedreclamacoes', function(req, res) {
    db_rooms.getClosedReclamacoes(function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result)
    })
})


module.exports = router