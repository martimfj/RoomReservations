var connection = require('./db_connection')

function getReclamacoes(callback) {
    var sql = 'SELECT * FROM reclamacao_info'
    connection.query(sql, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function getReclamacao(id_reclamacao, callback) {
    var sql = 'SELECT * FROM Reclamacao WHERE id_reclamacao = ?'
    connection.query(sql, id_reclamacao, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function createReclamacao(id_usuario, id_sala, tipo, descricao, callback) {
    var sql = 'CALL adiciona_reclamacao(?,?,?,?)'
    connection.query(sql, [id_usuario, id_sala, tipo, descricao], function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function deleteReclamacao(id_reclamacao, callback) {
    // ID_sala ou nome?
    var sql = 'DELETE FROM Reclamacao WHERE id_reclamacao = ?'
    connection.query(sql, id_reclamacao, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function updateReclamacao(id_reclamacao, data, callback) {
    var sql = 'UPDATE Usuarios SET ? WHERE id_reclamacao = ?'
    connection.query(sql, [data, id_reclamacao], function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })  
}

module.exports = { getReclamacoes, getReclamacao, createReclamacao, deleteReclamacao, updateReclamacao }
