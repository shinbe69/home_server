const mongoose = require('mongoose')
require('dotenv').config()

let isConnect = new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost:27017')
    .then(() => resolve(true))
    .catch(() => reject(false))
})

module.exports = { isConnect }