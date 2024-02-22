const express = require('express')
const router = express.Router()
const Temperature = require('../models/Temperature')

router.get('/', (req, res) => {
    Temperature.find()
    .sort({ collectAt: 'descending' })
    .limit(3)
    .then(temperatureValues => {
        let sum = 0
        temperatureValues.forEach((temperature) => {
            sum += temperature.value
        })
        res.json({ value: sum/3, updateAt: temperatureValues[temperatureValues.length -1].collectAt.toLocaleString() })
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
    let temperatureValue = req.body.temperature
    if (!temperatureValue) res.sendStatus(400)
    else {
        Temperature.create({value: temperatureValue})
        .then(() => res.sendStatus(200))
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    }
})

module.exports = router