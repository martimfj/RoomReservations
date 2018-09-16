const express = require('express')
const router  = express.Router()

router.post('/register', (req, res) => {
    console.log('Registro iciniado')
    var email = req.body.email;
    var nome  = req.body.nome;
    var senha = req.body.senha;
    var curso = req.body.curso;
    var semestre = req.body.semestre;
   
    
    req.getConnection(function(err,con){
        if (err) return next("Cannot Connect");
            
        con.query('INSERT INTO Usuarios (email, nome, senha, curso, semestre) VALUES(?, ?, ?, ?, ?)', [email, nome, senha, curso, semestre], (err, results) => {
            if(err){
                return res.json({"status": "500", "auth": 'Dados invalidos'})
                //return res.send(err)
            }
            
            console.log('Usuario registrado')
            return res.json({"status": "200", "email": email})
      
       });
    });
});

module.exports = router
