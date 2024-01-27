const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Temperature = new Schema({
    value: Number,
    collectAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Temperature', Temperature)