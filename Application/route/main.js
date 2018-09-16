const express = require('express')
const router  = express.Router()

router.get('/main', function(req, res, next){
    console.log("main request")
    req.getConnection(function(err,conn){
        
            if (err) return next("Cannot Connect");
    
            var query = conn.query('SELECT * FROM salas', function(err,rows){
    
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