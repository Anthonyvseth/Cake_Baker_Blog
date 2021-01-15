const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const AppRouter = require('./routes/AppRouter')
const connection = require('./db/connections')
const path = require('path')

const PORT = process.env.PORT || 3005
const app = express()

// Initialize Middleware
app.use(logger('dev'))
app.use(helmet({ contentSecurityPolicy: false }))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.disable('X-Powered-By')
app.get('/api', (req,res) => {res.json({message: 'Server Working'})})
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
)
app.use('/api', AppRouter)
app.use((req ,res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})

app.listen(PORT, async () => {
    try {
      await connection
      console.log('Database Connected')
      console.log(`App listening on port: ${PORT}`)
    } catch (error) {
      throw new Error('Connection Error')
    }
})