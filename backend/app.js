const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json())


app.use('/api', routes);

module.exports = app;