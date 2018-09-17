var express = require('express');
var router = express.Router();

router.get('/perfil', function(req, res, next){
    console.log("perfil request")
    var id_usuario = req.body.id_usuario;
    req.getConnection(function(err,conn){
        
            if (err) return next("Cannot Connect");
    
            var query = conn.query('SELECT * FROM usuario WHERE id = ?', [id_usuario], function(err,rows){
    
                if(err){
                    console.log(err);
                    return next("Mysql error, check your query");
                }

                var result = JSON.parse(JSON.stringify(rows));  
                res.json(result);
    
                });
        });
})

module.exports = router