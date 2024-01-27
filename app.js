const express = require('express')
const app = express()
app.use(express.json({ limit: '10mb' }))
const db = require('./db/connectDB')
const router = require('./api/router')
require('dotenv').config()

app.use(express.json())

db.isConnect.then(
    () => {
        console.log('Connected to the database!')
        app.listen(process.env.PORT || 3001, process.env.HOST || '0.0.0.0', () => {
            app.use(router)
            console.log('Server is running on', process.env.HOST, 'at port:', process.env.PORT, '!')
        })
    },
    () => {
        console.log('Connecting to the database failed!')
    }
)