var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next){
    console.log("Login request")
    var email = req.body.email;
    var password = req.body.password;
    
        req.getConnection(function(err,conn){
            if (err) return next("Cannot Connect");
                 
            var query = conn.query("SELECT * FROM Usuarios WHERE email = ? ", [email] ,function(err,rows){
                
                if(err){
                    console.log(err);
                    return next("Mysql error, check your query");
                }

                if(rows.length < 1) {
                    return res.json({"status": "500", "auth": "Usuário ou senha não conferem."})
                }

                var result = JSON.parse(JSON.stringify(rows));
                console.log(result)

                for(var i = 0; i < result.length; i++){
                    if(result[i].senha === password){
                        return res.json({"status": "200", "email": result[i].email})
                    }
                }
                return res.json({"status": "500", "auth": "Usuário ou senha não conferem."})
            });
    
        });    

});

module.exports = router;