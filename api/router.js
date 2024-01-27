const express = require('express')
const router = express.Router()
const temperature = require('./temperature')

router.use('/api/temperature', temperature)

module.exports = router