const express = require('mongoose')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001
const app = express()

app.use(logger('dev'))
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extened: true }))

app.listen(PORT, async () => {
    try {
        await connection 
        console.log('Database Connected')
        console.log(`App listening on port: ${PORT}`)
    } catch (error) {
        throw new Error('Connection error')
    }
})