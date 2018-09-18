var express = require('express');
var router = express.Router();
var db_rooms = require('../database/reservas');

router.get('/reservas', function(req, res) {
    db_rooms.getReservas(function(err, result){
        if (err){
            res.status(500).send(err) 
            throw err
        }
        if(result.length < 0){
            res.status(404).send({error: "Não existe reservas cadastradas no banco de dados."})
        }
        res.status(200).send(result)
    })
})

router.get('/reserva/:id_reserva', function(req, res) {
    db_rooms.getReserva(req.params.id_reserva, function(err, result){
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

router.post('/reserva/', function(req, res) {
    var params = req.body;
    db_rooms.createReserva(params.id_usuario, params.id_sala, function(err, result){
        if (err){
            res.status(500).send({error : "Erro na criação de uma reserva no banco de dados." }) 
            console.log(err)
            throw err
        }
        res.status(201).send({message: "Reserva criada com sucesso."})
    })
})

router.delete('/reserva/', function(req, res) {
    var params = req.body;
    db_rooms.deleteReserva(params.id_reserva, function(err, result){
        if (err){
            res.status(500).send({error : "Erro ao remover reserva do banco de dados." })
            console.log(err)
            throw err
        }
        res.status(200).send({message: "Reserva removida com sucesso"})
    })
})

router.put('/reserva/', function(req, res) {
    var params = req.body;
    db_rooms.updateReserva(params.id_reserva, params, function(err, result){
        if (err){
            res.status(500).send({error : "Erro ao atualizar dados da reserva no banco de dados." })
            console.log(err)
            throw err
        }
        res.status(200).send({message: "Reserva atualizada com sucesso"})
    })
})

module.exports = router