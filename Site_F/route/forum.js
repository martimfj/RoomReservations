const express = require('express')
const router  = express.Router()

router.get('/forum', (req, res) =>{
    res.json({
        titule: 'primeiro',
        conteudo: 'cont',
        autor: 'leo',
    })
})

module.exports = router