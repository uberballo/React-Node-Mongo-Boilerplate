const express = require('express')
const routes = require('./src/routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const errorHandler = require('./src/utils/errorHandler')
const morgan = require('morgan')

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
