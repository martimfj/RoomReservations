var express = require('express');
var router = express.Router();
var db_rooms = require('../database/reclamacoes');

router.get('/reclamacoes', function(req, res) {
    db_rooms.getReclamacoes(function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        if(result.length < 0){
            res.status(404).send({error: "Não existe reclamações no banco de dados."})
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
        if(result.length < 0){
            res.status(404).send({error: "Não existe uma reclamação com esse ID no banco de dados."})
        }
        res.status(200).send(result)
    })
})

router.post('/reclamacao/', function(req, res) {
    var params = req.body;
    db_rooms.createReclamacao(params.id_usuario, params.id_sala, params.tipo, params.descricao, function(err, result){
        if (err){
            res.status(500).send({error : "Erro na criação de uma reclamação no banco de dados." })
            console.log(err)
            throw err
        }
        res.status(200).send({message: "Reclamação criada com sucesso"})
    })
})

router.delete('/reclamacao/', function(req, res) {
    var params = req.body;
    db_rooms.deleteReclamacao(params.id_reclamacao, function(err, result){
        if (err){
            res.status(500).send({error : "Erro na remoção de uma reclamação no banco de dados." })
            console.log(err)
            throw err
        }
        res.status(200).send({message: "Reclamação removida com sucesso"})
    })
})

router.put('/reclamacao/', function(req, res) {
    console.log(req.body)
    var params = req.body;
    var id_reclamacao = params.id_reclamacao
    delete params.id_reclamacao
    
    db_rooms.updateReclamacao(id_reclamacao,params, function(err, result){
        if (err){
            res.status(500).send({error : "Erro ao atualizar dados da reclamação no banco de dados." })
            console.log(err)
            throw err
        }
        res.status(200).send({message: "Reclamação atualizada com sucesso."})
    })
})
             
router.get('/openreclamacoes', function(req, res) {
    db_rooms.getOpenReclamacoes(function(err, result){
        if (err){
            res.status(500).send({error : "Erro na consulta de reclamações abertas." })
            console.log(err)
            throw err
        }
        res.status(200).send(result)
    })
})

router.get('/closedreclamacoes', function(req, res) {
    db_rooms.getClosedReclamacoes(function(err, result){
        if (err){
            res.status(500).send({error : "Erro na consulta de reclamações fechadas." })
            console.log(err)
            throw err
        }
        res.status(200).send(result)
    })
})


module.exports = router