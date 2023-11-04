const express = require('express')
const router = express.Router()

router.post('/data', (req, res) => {
    let gas = req.body.gas
    let temperature = req.body.temperature
    if (!gas || !temperature) res.sendStatus(400)
    else {
        if (gas > 10 || temperature > 50) {
            res.send('Alert!')
        }
        else res.send('Normal!')
    }
})

router.get('/about', (req, res) => {
    res.send('about us')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.json('ok')
})

router.get('/data', (req, res) => {
    res.json({ gas: 14, temperature: 35 })
})

module.exports = router