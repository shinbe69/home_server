const express = require('express')
const router = express.Router()

router.get('/check-health', (req, res) => {
    res.sendStatus(200)
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.json('ok')
})

router.get('/data', (req, res) => {
    res.json({ gas: 14, temperature: 35 })
})

module.exports = router