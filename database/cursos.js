var connection = require('./db_connection')

function getCursos(callback) {
    var sql = 'SELECT * FROM Cursos'
    connection.query(sql, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function getCurso(id_curso, callback) {
    var sql = 'SELECT * FROM Cursos WHERE id_curso = ?'
    connection.query(sql, id_curso, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function createCurso(nome_curso, tipo, callback) {
    var sql = 'INSERT INTO Cursos (nome_curso, tipo) VALUES (?, ?)'
    connection.query(sql, [nome_curso, tipo], function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function deleteCurso(id_curso, callback) {
    var sql = 'DELETE FROM Cursos WHERE id_curso = ?'
    connection.query(sql, id_curso, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function updateCurso(id_curso, data, callback) {
    var sql = 'UPDATE Cursos SET ? WHERE id_curso = ?'
    connection.query(sql, [data, id_curso], function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

module.exports = { getCursos, getCurso, createCurso, deleteCurso, updateCurso }
