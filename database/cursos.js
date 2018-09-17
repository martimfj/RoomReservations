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
    // ID_sala ou nome?
    var sql = 'SELECT * FROM Cursos WHERE id_curso = ?'
    connection.query(sql, id_curso, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function createCurso(nome, tipo, callback) {
    var sql = 'INSERT INTO Cursos (nome, tipo) VALUES (?, ?)'
    connection.query(sql, [nome, tipo], function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function deleteCurso(id_curso, callback) {
    // ID_sala ou nome?
    var sql = 'DELETE FROM Cursos WHERE id_curso = ?'
    connection.query(sql, id_curso, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function updateCurso(id_curso, nome, tipo, callback) {
    // ID_sala ou nome?
    var sql = 'UPDATE Cursos SET nome = ?, tipo = ? WHERE id_curso = ?'
    connection.query(sql, [nome, tipo, id_curso], function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

module.exports = { getCursos, getCurso, createCurso, deleteCurso, updateCurso }
