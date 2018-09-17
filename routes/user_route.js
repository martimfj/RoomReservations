var express = require('express');
var router = express.Router();
var db_rooms = require('../database/users');

router.get('/users', function(req, res) {
    db_rooms.getUsers(function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result[0])
    })
})

router.get('/user/:id_usuario', function(req, res) {
    db_rooms.getUser(req.params.id_usuario, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result[0])
    })
})

router.post('/user/', function(req, res) {
    var params = req.body;
    db_rooms.createUser(params.email, params.nome, params.senha, params.curso, params.semestre, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(201).send({message: "Usuário criado com sucesso"})
    })
})

router.delete('/user/', function(req, res) {
    var params = req.body;
    db_rooms.deleteUser(params.id_usuario, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send({message: "Usuário deletado com sucesso"})
    })
})

router.put('/user/', function(req, res) {
    var params = req.body;
    db_rooms.updateUser(params.id_usuario, params, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send({message: "Usuário atualizado com sucesso"})
    })
})

router.post('/auth', function(req, res) {
    var params = req.body;
    db_rooms.getAuth(params.email, function(err, result){
        if (err){
            res.status(500).send(err)
            throw err
        }
        var resposta = JSON.parse(JSON.stringify(result[0]))
        console.log(resposta, resposta.senha)

        if (resposta.senha == params.senha){
            res.status(200).send({message: "Usuário autenticado com sucesso"})
        }
        else{
            res.status(401).send({message: "Senha não corresponde"})
        }
    })
})

module.exports = router