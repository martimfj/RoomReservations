var express = require('express');
var router = express.Router();
var db_rooms = require('../database/cursos');

router.get('/cursos', function(req, res) {
    db_rooms.getCursos(function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result[0])
    })
})

router.get('/curso/:id_curso', function(req, res) {
    db_rooms.getCurso(req.params.id_curso, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result[0])
    })
})

router.post('/curso/', function(req, res) {
    var params = req.body;
    db_rooms.createCurso(params.nome, params.tipo, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(201).send({message: "Curso criado com sucesso"})
    })
})

router.delete('/curso/', function(req, res) {
    var params = req.body;
    db_rooms.deleteCurso(params.id_curso, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send({message: "Curso deletado com sucesso"})
    })
})

router.put('/curso/', function(req, res) {
    var params = req.body;
    db_rooms.updateCurso(params.id_curso, params.nome, params.tipo, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send({message: "Curso atualizado com sucesso"})
    })
})

module.exports = router