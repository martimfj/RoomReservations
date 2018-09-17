var express = require('express');
var router = express.Router();
var db_rooms = require('../database/users');

router.get('/users', function(req, res) {
    db_rooms.getUsers(function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result)
    })
})

router.get('/user/:id_usuario', function(req, res) {
    db_rooms.getUser(req.params.id_usuario, function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        res.status(200).send(result)
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
    console.log("Login Request")
    var params = req.body;
    db_rooms.getAuth(params.email, function(err, result){
        if (err) {
            res.json({"status": "500", "message": "Erro na query do MySQL"})
            console.log("Erro na query MySQL")
            throw err
        }

        else{
            if(result.length > 0){
                if(params.senha == result[0].senha){
                    res.json({"status": "200", "message": "Login efetuado com sucesso."})
                    console.log("Usuário autenticado")
                }
                else{
                    res.json({"status": "401", "message": "Senha não confere"})
                    console.log("Senha não confere")
                }
            }
            else{
                res.json({"status": "401", "message": "Email não existe"})
                console.log("Email não existe")
            }
        }
    })
})

module.exports = router