var express = require('express');
var router = express.Router();
var db_rooms = require('../database/users');

router.get('/users', function(req, res) {
    db_rooms.getUsers(function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        if(result.length < 0){
            res.status(404).send({error: "Não existe usuários no banco de dados."})
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
        if(result.length < 0){
            res.status(404).send({error: "Não existe um usuário com esse ID no banco de dados."})
        }
        res.status(200).send(result)
    })
})

router.post('/user/', function(req, res) {
    var params = req.body;
    console.log(params)
    db_rooms.createUser(params.email, params.nome, params.senha, params.id_curso, params.semestre, function(err, result){
        if (err){
            res.json({status:"500", message : "Dados invalidos." })
            console.log(err) 
            throw err
        }
        res.json({status: "201", message: "Usuário criado com sucesso."})
    })
})

router.delete('/user/', function(req, res) {
    var params = req.body;
    db_rooms.deleteUser(params.id_usuario, function(err, result){
        if (err){
            res.status(500).send({error : "Erro ao remover usuário do banco de dados." })
            console.log(err)  
            throw err
        }
        res.status(200).send({message: "Usuário deletado com sucesso."})
    })
})

router.put('/user/', function(req, res) {
    var params = req.body;
    db_rooms.updateUser(params.id_usuario, params, function(err, result){
        if (err){
            res.status(500).send({ error : "Erro ao atualizar dados do usuário no banco de dados." }) 
            console.log(err) 
            throw err
        }
        res.status(200).send({message: "Atualizado com sucesso."})
    })
})


router.post('/auth', function(req, res) {
    console.log("Login Request")
    var params = req.body;
    db_rooms.getAuth(params.email, function(err, result){
        if (err) {
            res.status(500).send({ error : "Erro ao autenticar com os dados do banco de dados."}) 
            console.log(err) 
            throw err
        }

        else{
            if(result.length > 0){
                if(params.senha == result[0].senha){
                    res.json({status:200, message: "Usuário autenticado com sucesso."})
                    console.log("Usuário autenticado")
                }
                else{
                    res.json({status: 401, message : "Senha Invalida."})
                    console.log("Senha não confere")
                }
            }
            else{
                res.json({status: 401, message : "O email não existe no banco de dados."}) 
                console.log("Email não existe")
            }
        }
    })
})

module.exports = router