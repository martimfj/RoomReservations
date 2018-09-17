var connection = require('./db_connection')

function getSalas(callback) {
    var sql = 'SELECT * FROM Salas'
    connection.query(sql, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function getSala(id_sala, callback) {
    // ID_sala ou nome?
    var sql = 'SELECT * FROM Salas WHERE id_sala = ?'
    connection.query(sql, id_sala, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function createSala(nome, lugares, callback) {
    var sql = 'INSERT INTO Salas (nome, lugares) VALUES (?, ?)'
    connection.query(sql, [nome, lugares], function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function deleteSala(id_sala, callback) {
    // ID_sala ou nome?
    var sql = 'DELETE FROM Salas WHERE id_sala = ?'
    connection.query(sql, id_sala, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function updateSala(id_sala, nome, lugares, callback) {
    // ID_sala ou nome?
    var sql = 'UPDATE Salas SET nome = ?, lugares = ? WHERE id_sala = ?'
    connection.query(sql, [nome, lugares, id_sala], function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

module.exports = { getSalas, getSala, createSala, deleteSala, updateSala }
