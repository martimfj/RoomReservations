const express = require('express')
const router  = require('express').Router()

router.use('/', require('./login'))
router.use('/', require('./main'))
router.use('/', require('./register'))
router.use('/', require('./forum'))

module.exports = router