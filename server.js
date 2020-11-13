const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const PORT = process.env.PORT || 3005
const app = express()

app.use(logger('dev'))
app.use(helmet())
app.use(cors())

app.get('/', (req,res) => {
    res.json({
        message: 'Welcome', 
    })
})

app.use((req ,res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})

app.use((error, req, res, next) => {
    const statuseCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statuseCode)
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'prodiction' ? '?' : error.stack  
    })
})

app.listen(PORT, () => {
        console.log('Database Connected')
        console.log(`App listening on port ${PORT}`)
  
})