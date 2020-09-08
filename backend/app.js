const express = require('express')
const routes = require('./src/routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const errorHandler = require('./src/utils/errorHandler')
const morgan = require('morgan')


const mongoose = require('mongoose')
const config = require('./src/utils/config')
const url = config.MONGO_URL

console.log('connecting to', url)
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(
  morgan(function (tokens, req, res) {
    console.log(req.body)
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms',
      JSON.stringify(req.body),
    ].join(' ')
  })
)

app.use(errorHandler)

app.use('/api', routes)

module.exports = app
