const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');


const app = express();
app.use(cors());


app.use('/api', routes);

module.exports = app;