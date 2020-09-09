const express = require('express')
const routes = require('./src/routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const errorHandler = require('./src/middleware/errorHandler')
const morgan = require('morgan')
const morganLogging = require('./src/middleware/morganLogging')

const mongoose = require('mongoose')
const config = require('./src/utils/config')
const uri = config.MONGO_URI

console.log('connecting to', uri)
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan(morganLogging))

app.use(errorHandler)

app.use('/api', routes)

module.exports = app
