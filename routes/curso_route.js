var express = require('express');
var router = express.Router();
var db_rooms = require('../database/cursos');

router.get('/cursos', function(req, res) {
    db_rooms.getCursos(function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        if(result.length < 0){
            res.status(404).send({error: "Não existe cursos cadastrados no banco de dados."})
        }
        res.status(200).send(result)
    })
})

router.get('/curso/:id_curso', function(req, res) {
    db_rooms.getCurso(req.params.id_curso, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        if(result.length < 0){
            res.status(404).send({error: "Não existe um curso com esse ID no banco de dados."})
        }
        res.status(200).send(result)
    })
})

router.post('/curso/', function(req, res) {
    var params = req.body;
    db_rooms.createCurso(params.nome_curso, params.tipo, function(err, result){
        if (err){
            res.status(500).send({error : "Erro na criação de um curso no banco de dados." }) 
            console.log(err)
            throw errr
        }
        res.status(201).send({message: "Curso criado com sucesso"})
    })
})

router.delete('/curso/', function(req, res) {
    var params = req.body;
    db_rooms.deleteCurso(params.id_curso, function(err, result){
        if (err){
            res.status(500).send({error : "Erro ao remover curso do banco de dados." })
            console.log(err)
            throw err
        }
        res.status(200).send({message: "Curso removido com sucesso"})
    })
})

router.put('/curso/', function(req, res) {
    var params = req.body;
    db_rooms.updateCurso(params.id_curso, params, function(err, result){
        if (err){
            res.status(500).send({error : "Erro ao atualizar dados do curso no banco de dados." })
            console.log(err)
            throw err
        }
        res.status(200).send({message: "Curso atualizado com sucesso"})
    })
})

module.exports = router