const express = require('express')
const router = express.Router()

router.get('/check-health', (req, res) => {
    res.sendStatus(200)
})

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

module.exports = router